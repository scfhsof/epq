/* ==================================================================
   AI Emotion Research — Frontend Application
   ================================================================== */

// ==================== i18n ====================
const T = {
  zh: {
    'step.info': '基本信息', 'step.pre': '情绪评估', 'step.chat': 'AI 对话',
    'step.post': '情绪评估', 'step.feedback': '反馈', 'step.result': '结果',
    'welcome.title': '机器对人类的情感影响研究',
    'welcome.desc': '本研究旨在探索人工智能交互对人类短期情绪状态的影响。随着AI技术日益融入日常生活，理解人机对话如何影响我们的情感体验变得尤为重要。在本研究中，您将完成一份简短的情绪评估问卷，随后与AI进行一段自由对话（至少1分钟），对话结束后再次完成情绪评估。通过对比对话前后的情绪变化，我们希望深入了解AI交互对人类情感的潜在作用。',
    'welcome.time': '整个过程大约需要10分钟左右。',
    'welcome.tip': '💡 无需立刻开始！您可以在闲暇、无聊或放松的时候再来参与，选择一个您觉得舒适自在的时间即可。',
    'welcome.consent': '您的参与完全自愿，所有数据将被匿名处理并仅用于学术研究目的。点击下方按钮即表示您已了解研究内容并同意参与。',
    'welcome.start': '我同意，开始参与',
    'demo.title': '基本信息',
    'demo.subtitle': '请填写以下基本信息，所有数据仅用于研究分析',
    'demo.age': '年龄', 'demo.gender': '性别',
    'demo.select': '请选择', 'demo.male': '男', 'demo.female': '女',
    'demo.other': '其他', 'demo.preferNot': '不愿透露', 'demo.next': '下一步',
    'survey.preTitle': '情绪评估（对话前）',
    'survey.postTitle': '情绪评估（对话后）',
    'survey.reference': '本量表改编自正性负性情绪量表 PANAS（Watson, Clark & Tellegen, 1988）',
    'survey.instructions': '请根据您【此刻】的感受，评估以下每种情绪的强烈程度',
    'survey.s1': '几乎没有', 'survey.s2': '比较少', 'survey.s3': '中等',
    'survey.s4': '比较多', 'survey.s5': '非常强烈',
    'survey.submit': '提交', 'survey.required': '请完成所有题目',
    'chat.title': '与 AI 自由对话', 'chat.end': '结束对话',
    'chat.placeholder': '输入您想说的话...', 'chat.typing': 'AI 正在输入...',
    'chat.send': '发送',
    'results.title': '研究结果',
    'results.thankYou': '感谢您的参与！以下是您的情绪变化分析',
    'results.preLabel': '对话前', 'results.postLabel': '对话后',
    'results.paLabel': '积极情绪 (PA)', 'results.naLabel': '消极情绪 (NA)',
    'results.note': '以上结果仅供研究参考，不构成任何心理健康诊断。如您有心理健康方面的疑虑，请咨询专业人士。',
    'results.finish': '完成并退出',
    'feedback.title': '体验反馈',
    'feedback.subtitle': '在查看结果之前，我们想了解一下您的对话体验',
    'feedback.q1': '与AI对话时，您整体感觉如何？',
    'feedback.q1a': '非常自然，像和朋友聊天',
    'feedback.q1b': '比较自然，偶尔有些不同',
    'feedback.q1c': '一般，说不上好坏',
    'feedback.q1d': '有些不自然或尴尬',
    'feedback.q1e': '很尴尬，不太舒服',
    'feedback.q2': '您是否愿意在日常生活中与AI进行类似的对话？',
    'feedback.q2a': '非常愿意',
    'feedback.q2b': '比较愿意',
    'feedback.q2c': '不确定',
    'feedback.q2d': '不太愿意',
    'feedback.q2e': '完全不愿意',
    'feedback.q3': '请分享您对这次对话体验的任何想法或感受（选填）',
    'feedback.q3placeholder': '例如：对话中有没有让您印象深刻的瞬间？有什么感到意外或不适的地方？',
    'feedback.required': '请至少完成前两道题',
    'feedback.submit': '提交反馈，查看结果',
    'results.analysisTitle': '分析结论',
    'results.duration': '对话时长',
    'results.minutes': '分钟',
    level: { low: '较低', moderate: '中等', high: '较高', vhigh: '很高' },
    analysis: {
      improved: '与AI对话后，您的整体情绪状态有所改善。',
      worsened: '与AI对话后，您的情绪状态出现了一些波动。这属于正常现象，可能与对话内容或个人状态有关。',
      mixed: '与AI对话后，您的情绪呈现出混合变化，部分维度有所改善，部分维度有所波动。',
      stable: '与AI对话前后，您的情绪状态基本保持稳定，未出现显著变化。',
      paUp: '积极情绪有所提升（+{n}分），表明对话可能带来了一定的正面情感体验。',
      paDown: '积极情绪有所下降（{n}分），这可能与对话内容或当时的状态有关。',
      paSame: '积极情绪保持稳定，未出现明显变化。',
      naUp: '消极情绪有所上升（+{n}分），建议关注自身情绪状态。',
      naDown: '消极情绪有所降低（{n}分），表明对话后负面情绪得到了一定缓解。',
      naSame: '消极情绪保持稳定，未出现明显变化。'
    },
    starters: [
      '嗨！很高兴和你聊天 😊 今天过得怎么样？',
      '你好呀！有什么想聊的吗？工作、生活、爱好，什么都可以～',
      '嘿，欢迎！最近在忙什么呢？来聊聊吧。',
      '你好！今天心情如何？随便聊聊～',
      '嗨～最近有什么开心的或者烦心的事吗？我在这里听你说。'
    ]
  },
  en: {
    'step.info': 'Info', 'step.pre': 'Assessment', 'step.chat': 'AI Chat',
    'step.post': 'Assessment', 'step.feedback': 'Feedback', 'step.result': 'Results',
    'welcome.title': 'Research on AI\'s Emotional Impact on Humans',
    'welcome.desc': 'This study explores how artificial intelligence interactions affect human short-term emotional states. As AI becomes increasingly integrated into daily life, understanding how human-AI conversations influence our emotional experiences is crucial. You will complete a brief emotional assessment, engage in a free conversation with AI (at least 1 minute), and then complete the assessment again. By comparing emotional changes before and after the conversation, we aim to gain insights into AI\'s potential effects on human emotions.',
    'welcome.time': 'The entire process takes approximately 10 minutes.',
    'welcome.tip': '💡 No need to start right away! Feel free to come back when you\'re relaxed, bored, or have some free time — pick a moment that feels comfortable for you.',
    'welcome.consent': 'Your participation is completely voluntary. All data will be anonymized and used solely for academic research purposes. By clicking the button below, you acknowledge that you understand the study and agree to participate.',
    'welcome.start': 'I Agree, Start',
    'demo.title': 'Basic Information',
    'demo.subtitle': 'Please fill in the following information (for research analysis only)',
    'demo.age': 'Age', 'demo.gender': 'Gender',
    'demo.select': 'Please select', 'demo.male': 'Male', 'demo.female': 'Female',
    'demo.other': 'Other', 'demo.preferNot': 'Prefer not to say', 'demo.next': 'Next',
    'survey.preTitle': 'Emotional Assessment (Pre-Conversation)',
    'survey.postTitle': 'Emotional Assessment (Post-Conversation)',
    'survey.reference': 'Adapted from the Positive and Negative Affect Schedule — PANAS (Watson, Clark & Tellegen, 1988)',
    'survey.instructions': 'Rate the extent to which you feel each emotion RIGHT NOW',
    'survey.s1': 'Very slightly', 'survey.s2': 'A little', 'survey.s3': 'Moderately',
    'survey.s4': 'Quite a bit', 'survey.s5': 'Extremely',
    'survey.submit': 'Submit', 'survey.required': 'Please answer all items',
    'chat.title': 'Free Chat with AI', 'chat.end': 'End Chat',
    'chat.placeholder': 'Type your message...', 'chat.typing': 'AI is typing...',
    'chat.send': 'Send',
    'results.title': 'Study Results',
    'results.thankYou': 'Thank you for participating! Here is your emotional change analysis',
    'results.preLabel': 'Pre-Conversation', 'results.postLabel': 'Post-Conversation',
    'results.paLabel': 'Positive Affect (PA)', 'results.naLabel': 'Negative Affect (NA)',
    'results.note': 'These results are for research purposes only and do not constitute any mental health diagnosis. If you have concerns, please consult a professional.',
    'results.finish': 'Finish & Exit',
    'feedback.title': 'Experience Feedback',
    'feedback.subtitle': 'Before viewing your results, we\'d like to hear about your conversation experience',
    'feedback.q1': 'How did the conversation with AI feel overall?',
    'feedback.q1a': 'Very natural, like chatting with a friend',
    'feedback.q1b': 'Fairly natural, with some differences',
    'feedback.q1c': 'Neutral, neither good nor bad',
    'feedback.q1d': 'Somewhat unnatural or awkward',
    'feedback.q1e': 'Very awkward and uncomfortable',
    'feedback.q2': 'Would you be willing to have similar conversations with AI in daily life?',
    'feedback.q2a': 'Definitely yes',
    'feedback.q2b': 'Probably yes',
    'feedback.q2c': 'Not sure',
    'feedback.q2d': 'Probably not',
    'feedback.q2e': 'Definitely not',
    'feedback.q3': 'Please share any thoughts or feelings about this conversation experience (optional)',
    'feedback.q3placeholder': 'e.g., Were there any memorable moments? Anything surprising or uncomfortable?',
    'feedback.required': 'Please complete at least the first two questions',
    'feedback.submit': 'Submit Feedback & View Results',
    'results.analysisTitle': 'Analysis',
    'results.duration': 'Chat Duration',
    'results.minutes': 'minutes',
    level: { low: 'Low', moderate: 'Moderate', high: 'High', vhigh: 'Very High' },
    analysis: {
      improved: 'After chatting with AI, your overall emotional state showed improvement.',
      worsened: 'After chatting with AI, your emotional state showed some fluctuations. This is normal and may be related to conversation content or personal factors.',
      mixed: 'After chatting with AI, your emotions showed mixed changes — some dimensions improved while others fluctuated.',
      stable: 'Your emotional state remained largely stable before and after the AI conversation.',
      paUp: 'Positive affect increased (+{n} points), suggesting the conversation may have brought positive emotional experiences.',
      paDown: 'Positive affect decreased ({n} points), which may be related to conversation content or personal state.',
      paSame: 'Positive affect remained stable with no significant change.',
      naUp: 'Negative affect increased (+{n} points). Consider paying attention to your emotional wellbeing.',
      naDown: 'Negative affect decreased ({n} points), suggesting negative emotions were somewhat alleviated after the conversation.',
      naSame: 'Negative affect remained stable with no significant change.'
    },
    starters: [
      "Hey! Great to chat with you 😊 How's your day going?",
      "Hi there! What would you like to talk about? Work, life, hobbies — anything goes~",
      "Hey, welcome! What have you been up to lately?",
      "Hello! How are you feeling today? Let's chat~",
      "Hi~ Has anything exciting or bothersome happened recently? I'm here to listen."
    ]
  }
};

let lang = 'zh';

function t(key) {
  const dict = T[lang];
  if (key in dict) return dict[key];
  const keys = key.split('.');
  let val = dict;
  for (const k of keys) {
    if (val == null) return key;
    val = val[k];
  }
  return val ?? key;
}

function setLang(l) {
  lang = l;
  document.getElementById('btn-zh').classList.toggle('active', l === 'zh');
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  updateSurveyLabels('pre-survey-items', shuffledA, 'a');
  updateSurveyLabels('post-survey-items', shuffledB, 'b');
  if (chartInstance) renderResults();
}

function updateSurveyLabels(containerId, items, prefix) {
  const container = document.getElementById(containerId);
  if (!container.children.length) return;
  items.forEach((item, idx) => {
    const label = container.querySelectorAll('.emotion-label')[idx];
    if (label) {
      label.innerHTML = `${item[lang]} <span class="en-hint">${lang === 'zh' ? '(' + item.en + ')' : ''}</span>`;
    }
  });
  container.querySelectorAll('.likert-end-label').forEach((el, i) => {
    el.textContent = i % 2 === 0 ? t('survey.s1') : t('survey.s5');
  });
}

// ==================== PANAS Scales ====================
// Form A — first half of PANAS-20 (Watson, Clark & Tellegen, 1988)
const FORM_A = [
  { id: 'a1', zh: '感兴趣的', en: 'Interested', type: 'pa' },
  { id: 'a2', zh: '兴奋的', en: 'Excited', type: 'pa' },
  { id: 'a3', zh: '坚强的', en: 'Strong', type: 'pa' },
  { id: 'a4', zh: '热情的', en: 'Enthusiastic', type: 'pa' },
  { id: 'a5', zh: '自豪的', en: 'Proud', type: 'pa' },
  { id: 'a6', zh: '心烦的', en: 'Distressed', type: 'na' },
  { id: 'a7', zh: '烦躁的', en: 'Upset', type: 'na' },
  { id: 'a8', zh: '内疚的', en: 'Guilty', type: 'na' },
  { id: 'a9', zh: '恐惧的', en: 'Scared', type: 'na' },
  { id: 'a10', zh: '敌意的', en: 'Hostile', type: 'na' }
];

// Form B — second half of PANAS-20
const FORM_B = [
  { id: 'b1', zh: '积极的', en: 'Active', type: 'pa' },
  { id: 'b2', zh: '警觉的', en: 'Alert', type: 'pa' },
  { id: 'b3', zh: '专注的', en: 'Attentive', type: 'pa' },
  { id: 'b4', zh: '坚定的', en: 'Determined', type: 'pa' },
  { id: 'b5', zh: '受鼓舞的', en: 'Inspired', type: 'pa' },
  { id: 'b6', zh: '易怒的', en: 'Irritable', type: 'na' },
  { id: 'b7', zh: '羞愧的', en: 'Ashamed', type: 'na' },
  { id: 'b8', zh: '焦虑的', en: 'Nervous', type: 'na' },
  { id: 'b9', zh: '不安的', en: 'Jittery', type: 'na' },
  { id: 'b10', zh: '害怕的', en: 'Afraid', type: 'na' }
];

// ==================== State ====================
let sessionId = null;
let chatSeconds = 0;
let chatInterval = null;
let chatMessages = [];
let apiMessages = [];
let preScores = null;
let postScores = null;
let chartInstance = null;
let isSending = false;
let shuffledA = [];
let shuffledB = [];

// ==================== Utilities ====================
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function api(endpoint, method = 'GET', data = null) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (data) opts.body = JSON.stringify(data);
  const res = await fetch('/api' + endpoint, opts);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ==================== Navigation ====================
const STEP_MAP = {
  'screen-demographics': 1,
  'screen-pre-survey': 2,
  'screen-chat': 3,
  'screen-post-survey': 4,
  'screen-feedback': 5,
  'screen-results': 6
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const stepNum = STEP_MAP[id];
  if (stepNum != null) {
    document.getElementById('stepper').style.display = 'flex';
    document.querySelectorAll('.step').forEach(s => {
      const n = parseInt(s.dataset.step);
      s.classList.toggle('done', n < stepNum);
      s.classList.toggle('active', n === stepNum);
    });
  } else {
    document.getElementById('stepper').style.display = 'none';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== Start ====================
async function startStudy() {
  const btn = document.querySelector('#screen-welcome .btn');
  btn.disabled = true;
  btn.textContent = lang === 'zh' ? '加载中...' : 'Loading...';
  try {
    const data = await api('/session', 'POST');
    sessionId = data.sessionId;
    showScreen('screen-demographics');
  } catch (e) {
    console.error('startStudy error:', e);
    alert(lang === 'zh' ? '连接服务器失败，请确认服务器正在运行后刷新页面重试。' : 'Failed to connect to server. Please make sure the server is running and refresh.');
  } finally {
    btn.disabled = false;
    btn.textContent = t('welcome.start');
  }
}

// ==================== Demographics ====================
async function submitDemographics() {
  const age = parseInt(document.getElementById('input-age').value);
  const gender = document.getElementById('input-gender').value;
  if (!age || age < 1 || !gender) {
    alert(lang === 'zh' ? '请填写完整信息' : 'Please fill in all fields');
    return;
  }
  try {
    await api(`/session/${sessionId}/demographics`, 'PUT', { age, gender });
    renderSurvey('pre-survey-items', FORM_A, 'a');
    showScreen('screen-pre-survey');
  } catch (e) {
    console.error('submitDemographics error:', e);
    alert(lang === 'zh' ? '提交失败，请重试。' : 'Submission failed, please try again.');
  }
}

// ==================== Survey ====================
function renderSurvey(containerId, form, prefix) {
  const container = document.getElementById(containerId);
  const items = prefix === 'a' ? shuffledA : shuffledB;

  container.innerHTML = items.map((item, idx) => `
    <div class="survey-item">
      <div class="emotion-label">
        ${item[lang]} <span class="en-hint">${lang === 'zh' ? '(' + item.en + ')' : ''}</span>
      </div>
      <div class="likert-group">
        <span class="likert-end-label">${t('survey.s1')}</span>
        <div class="likert-options">
          ${[1,2,3,4,5].map(v => `
            <label class="likert-option">
              <input type="radio" name="${prefix}-${item.id}" value="${v}">
              <span class="likert-btn">${v}</span>
            </label>
          `).join('')}
        </div>
        <span class="likert-end-label">${t('survey.s5')}</span>
      </div>
    </div>
  `).join('');
}

function collectAnswers(form, prefix) {
  const answers = {};
  let complete = true;
  for (const item of form) {
    const checked = document.querySelector(`input[name="${prefix}-${item.id}"]:checked`);
    if (!checked) { complete = false; continue; }
    answers[item.id] = { value: parseInt(checked.value), type: item.type };
  }
  return { answers, complete };
}

function calcScores(answers) {
  let pa = 0, na = 0;
  for (const a of Object.values(answers)) {
    if (a.type === 'pa') pa += a.value;
    else na += a.value;
  }
  return { pa, na };
}

async function submitPreSurvey() {
  const { answers, complete } = collectAnswers(FORM_A, 'a');
  const errEl = document.getElementById('pre-survey-error');
  if (!complete) { errEl.classList.add('show'); return; }
  errEl.classList.remove('show');

  preScores = calcScores(answers);
  await api(`/session/${sessionId}/pre-survey`, 'PUT', {
    paScore: preScores.pa, naScore: preScores.na, answers
  });
  initChat();
  showScreen('screen-chat');
}

async function submitPostSurvey() {
  const { answers, complete } = collectAnswers(FORM_B, 'b');
  const errEl = document.getElementById('post-survey-error');
  if (!complete) { errEl.classList.add('show'); return; }
  errEl.classList.remove('show');

  postScores = calcScores(answers);
  await api(`/session/${sessionId}/post-survey`, 'PUT', {
    paScore: postScores.pa, naScore: postScores.na, answers
  });
  showScreen('screen-feedback');
}

// ==================== Chat ====================
const SYSTEM_PROMPT = {
  zh: `你是一个参与学术研究的对话AI。请与用户进行自然、温暖的对话。
规则：
- 像朋友一样自然地交流，保持温暖但不过度热情
- 跟随用户的话题，适当提问表示兴趣
- 回复简洁（2-4句话为宜）
- 不要提及这是研究实验
- 不要扮演心理咨询师
- 用中文回复`,
  en: `You are a conversational AI participating in an academic study. Engage naturally and warmly.
Rules:
- Chat like a friendly acquaintance, warm but not overly enthusiastic
- Follow the user's lead, ask follow-up questions to show interest
- Keep responses concise (2-4 sentences)
- Do not mention this is a research study
- Do not act as a therapist or counselor
- Reply in English`
};

function initChat() {
  chatSeconds = 0;
  chatMessages = [];
  apiMessages = [{ role: 'system', content: SYSTEM_PROMPT[lang] }];

  document.getElementById('chat-messages').innerHTML = '';
  document.getElementById('btn-end-chat').disabled = true;
  document.getElementById('chat-timer').classList.remove('ready');

  const starters = T[lang].starters;
  const greeting = starters[Math.floor(Math.random() * starters.length)];
  appendMessage('ai', greeting);
  chatMessages.push({ role: 'assistant', content: greeting, time: 0 });
  apiMessages.push({ role: 'assistant', content: greeting });

  chatInterval = setInterval(tickTimer, 1000);
}

function tickTimer() {
  chatSeconds++;
  const m = String(Math.floor(chatSeconds / 60)).padStart(2, '0');
  const s = String(chatSeconds % 60).padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;

  if (chatSeconds >= 60) {
    document.getElementById('btn-end-chat').disabled = false;
    document.getElementById('chat-timer').classList.add('ready');
  }
}

function appendMessage(role, text) {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || isSending) return;

  input.value = '';
  appendMessage('user', text);
  chatMessages.push({ role: 'user', content: text, time: chatSeconds });
  apiMessages.push({ role: 'user', content: text });

  isSending = true;
  document.getElementById('btn-send').disabled = true;
  document.getElementById('chat-typing').style.display = 'flex';

  try {
    const data = await api('/chat', 'POST', { messages: apiMessages });
    const reply = data.choices?.[0]?.message?.content || (lang === 'zh' ? '抱歉，我暂时无法回复。' : 'Sorry, I cannot respond right now.');
    appendMessage('ai', reply);
    chatMessages.push({ role: 'assistant', content: reply, time: chatSeconds });
    apiMessages.push({ role: 'assistant', content: reply });
  } catch (e) {
    appendMessage('ai', lang === 'zh' ? '网络错误，请重试。' : 'Network error, please try again.');
  }

  document.getElementById('chat-typing').style.display = 'none';
  document.getElementById('btn-send').disabled = false;
  isSending = false;
  input.focus();
}

async function endChat() {
  if (chatSeconds < 60) return;
  clearInterval(chatInterval);
  await api(`/session/${sessionId}/chat-log`, 'PUT', {
    messages: chatMessages,
    duration: chatSeconds
  });
  renderSurvey('post-survey-items', FORM_B, 'b');
  showScreen('screen-post-survey');
}

// ==================== Results ====================
function getLevel(score) {
  if (score <= 10) return t('level.low');
  if (score <= 15) return t('level.moderate');
  if (score <= 20) return t('level.high');
  return t('level.vhigh');
}

function renderResults() {
  document.getElementById('pre-pa-score').textContent = preScores.pa;
  document.getElementById('pre-na-score').textContent = preScores.na;
  document.getElementById('post-pa-score').textContent = postScores.pa;
  document.getElementById('post-na-score').textContent = postScores.na;

  document.getElementById('pre-pa-level').textContent = getLevel(preScores.pa);
  document.getElementById('pre-na-level').textContent = getLevel(preScores.na);
  document.getElementById('post-pa-level').textContent = getLevel(postScores.pa);
  document.getElementById('post-na-level').textContent = getLevel(postScores.na);

  renderChart();
  renderAnalysis();
}

function renderChart() {
  const ctx = document.getElementById('chart-comparison').getContext('2d');
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [t('results.paLabel'), t('results.naLabel')],
      datasets: [
        {
          label: t('results.preLabel'),
          data: [preScores.pa, preScores.na],
          backgroundColor: ['rgba(52,211,153,0.15)', 'rgba(251,113,133,0.15)'],
          borderColor: ['#34d399', '#fb7185'],
          borderWidth: 2,
          borderRadius: 8
        },
        {
          label: t('results.postLabel'),
          data: [postScores.pa, postScores.na],
          backgroundColor: ['rgba(52,211,153,0.5)', 'rgba(251,113,133,0.5)'],
          borderColor: ['#34d399', '#fb7185'],
          borderWidth: 2,
          borderRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top', labels: { color: '#a1a1aa', padding: 16, font: { weight: 600 } } }
      },
      scales: {
        y: {
          beginAtZero: true, max: 25,
          title: { display: true, text: lang === 'zh' ? '得分' : 'Score', color: '#a1a1aa' },
          ticks: { color: '#71717a' },
          grid: { color: 'rgba(255,255,255,0.04)' }
        },
        x: {
          ticks: { color: '#a1a1aa' },
          grid: { color: 'rgba(255,255,255,0.04)' }
        }
      }
    }
  });
}

function renderAnalysis() {
  const box = document.getElementById('results-analysis');
  const paDiff = postScores.pa - preScores.pa;
  const naDiff = postScores.na - preScores.na;
  const mins = Math.floor(chatSeconds / 60);

  let overall;
  if (paDiff > 2 && naDiff < -2) overall = t('analysis.improved');
  else if (paDiff < -2 && naDiff > 2) overall = t('analysis.worsened');
  else if (Math.abs(paDiff) <= 2 && Math.abs(naDiff) <= 2) overall = t('analysis.stable');
  else overall = t('analysis.mixed');

  let paText;
  if (paDiff > 2) paText = t('analysis.paUp').replace('{n}', paDiff);
  else if (paDiff < -2) paText = t('analysis.paDown').replace('{n}', paDiff);
  else paText = t('analysis.paSame');

  let naText;
  if (naDiff > 2) naText = t('analysis.naUp').replace('{n}', naDiff);
  else if (naDiff < -2) naText = t('analysis.naDown').replace('{n}', naDiff);
  else naText = t('analysis.naSame');

  box.innerHTML = `
    <h4>${t('results.analysisTitle')}</h4>
    <p>⏱ ${t('results.duration')}：${mins} ${t('results.minutes')}</p>
    <p>${overall}</p>
    <p>📈 ${paText}</p>
    <p>📉 ${naText}</p>
  `;
}

// ==================== Feedback ====================
async function submitFeedback() {
  const q1 = document.querySelector('input[name="fb-q1"]:checked');
  const q2 = document.querySelector('input[name="fb-q2"]:checked');
  const errEl = document.getElementById('feedback-error');

  if (!q1 || !q2) {
    errEl.classList.add('show');
    return;
  }
  errEl.classList.remove('show');

  const feedback = {
    feeling: q1.value,
    willingness: q2.value,
    comments: document.getElementById('fb-text').value.trim()
  };

  try {
    await api(`/session/${sessionId}/feedback`, 'PUT', feedback);
  } catch (e) {
    console.error('feedback save error:', e);
  }

  renderResults();
  showScreen('screen-results');
}

// ==================== Finish ====================
function finishAndExit() {
  document.body.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:20px;background:#09090b;">
      <div>
        <div style="font-size:3rem;margin-bottom:16px;">🎉</div>
        <h2 style="margin-bottom:12px;color:#fafafa;">${lang === 'zh' ? '感谢您的参与！' : 'Thank you for participating!'}</h2>
        <p style="color:#71717a;">${lang === 'zh' ? '您已完成本次研究，现在可以安全关闭此页面。' : 'You have completed the study. You may now close this page.'}</p>
      </div>
    </div>`;
}

// ==================== Init ====================
document.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-welcome');
  document.getElementById('stepper').style.display = 'none';

  document.getElementById('chat-input').addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  shuffledA = shuffle(FORM_A);
  shuffledB = shuffle(FORM_B);
});
