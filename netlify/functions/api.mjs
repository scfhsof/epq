import { getStore } from "@netlify/blobs";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });

export default async (req) => {
  const url = new URL(req.url);
  const path = url.pathname.replace(/^\/api/, "");
  const method = req.method;

  if (method === "OPTIONS") return json({}, 204);

  try {
    const store = getStore("participants");

    // POST /api/session
    if (path === "/session" && method === "POST") {
      const sessionId = crypto.randomUUID();
      await store.setJSON(sessionId, {
        session_id: sessionId,
        created_at: new Date().toISOString(),
      });
      return json({ sessionId });
    }

    // PUT /api/session/:id/demographics
    const demoMatch = path.match(/^\/session\/([^/]+)\/demographics$/);
    if (demoMatch && method === "PUT") {
      const record = await store.getJSON(demoMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      const data = await req.json();
      record.age = data.age;
      record.gender = data.gender;
      await store.setJSON(demoMatch[1], record);
      return json({ success: true });
    }

    // PUT /api/session/:id/pre-survey
    const preMatch = path.match(/^\/session\/([^/]+)\/pre-survey$/);
    if (preMatch && method === "PUT") {
      const record = await store.getJSON(preMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      const data = await req.json();
      record.pre_pa_score = data.paScore;
      record.pre_na_score = data.naScore;
      record.pre_answers = data.answers;
      await store.setJSON(preMatch[1], record);
      return json({ success: true });
    }

    // PUT /api/session/:id/post-survey
    const postMatch = path.match(/^\/session\/([^/]+)\/post-survey$/);
    if (postMatch && method === "PUT") {
      const record = await store.getJSON(postMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      const data = await req.json();
      record.post_pa_score = data.paScore;
      record.post_na_score = data.naScore;
      record.post_answers = data.answers;
      await store.setJSON(postMatch[1], record);
      return json({ success: true });
    }

    // PUT /api/session/:id/chat-log
    const chatMatch = path.match(/^\/session\/([^/]+)\/chat-log$/);
    if (chatMatch && method === "PUT") {
      const record = await store.getJSON(chatMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      const data = await req.json();
      record.chat_messages = data.messages;
      record.chat_duration = data.duration;
      await store.setJSON(chatMatch[1], record);
      return json({ success: true });
    }

    // PUT /api/session/:id/feedback
    const fbMatch = path.match(/^\/session\/([^/]+)\/feedback$/);
    if (fbMatch && method === "PUT") {
      const record = await store.getJSON(fbMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      const data = await req.json();
      record.feedback = data;
      await store.setJSON(fbMatch[1], record);
      return json({ success: true });
    }

    // POST /api/chat — proxy to AI API
    if (path === "/chat" && method === "POST") {
      const apiKey = process.env.AI_API_KEY;
      const apiUrl =
        process.env.AI_API_URL ||
        "https://api.openai.com/v1/chat/completions";
      const model = process.env.AI_MODEL || "gpt-3.5-turbo";

      if (!apiKey) return json({ error: "AI API key not configured" }, 500);

      const data = await req.json();
      const resp = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: data.messages,
          max_tokens: 500,
          temperature: 0.8,
        }),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        console.error("AI API error:", resp.status, errText);
        return json({ error: `AI API error: ${resp.status}` }, 502);
      }

      return json(await resp.json());
    }

    // GET /api/session/:id/results
    const resMatch = path.match(/^\/session\/([^/]+)\/results$/);
    if (resMatch && method === "GET") {
      const record = await store.getJSON(resMatch[1]);
      if (!record) return json({ error: "Session not found" }, 404);
      return json(record);
    }

    // GET /api/admin/export
    if (path === "/admin/export" && method === "GET") {
      const { blobs } = await store.list();
      const results = [];
      for (const blob of blobs) {
        const record = await store.getJSON(blob.key);
        if (record && record.age) results.push(record);
      }
      return json(results);
    }

    return json({ error: "Not found" }, 404);
  } catch (e) {
    console.error("Function error:", e);
    return json({ error: e.message }, 500);
  }
};

export const config = {
  path: "/api/*",
};
