import os
import json
import uuid
import sqlite3
from pathlib import Path

import requests
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='public', static_url_path='')

DATA_DIR = Path(__file__).parent / 'data'
DATA_DIR.mkdir(exist_ok=True)
DB_PATH = DATA_DIR / 'research.db'


def get_db():
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    conn.execute('PRAGMA journal_mode=WAL')
    return conn


def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS participants (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                session_id TEXT UNIQUE NOT NULL,
                age INTEGER,
                gender TEXT,
                pre_pa_score REAL,
                pre_na_score REAL,
                pre_answers TEXT,
                post_pa_score REAL,
                post_na_score REAL,
                post_answers TEXT,
                chat_messages TEXT,
                chat_duration INTEGER,
                feedback TEXT,
                created_at TEXT DEFAULT (datetime('now'))
            )
        ''')
        try:
            conn.execute('ALTER TABLE participants ADD COLUMN feedback TEXT')
        except sqlite3.OperationalError:
            pass


init_db()


@app.route('/')
def index():
    return send_from_directory('public', 'index.html')


@app.route('/api/session', methods=['POST'])
def create_session():
    session_id = str(uuid.uuid4())
    with get_db() as conn:
        conn.execute('INSERT INTO participants (session_id) VALUES (?)', (session_id,))
    return jsonify({'sessionId': session_id})


@app.route('/api/session/<session_id>/demographics', methods=['PUT'])
def save_demographics(session_id):
    data = request.get_json()
    with get_db() as conn:
        cur = conn.execute(
            'UPDATE participants SET age=?, gender=? WHERE session_id=?',
            (data['age'], data['gender'], session_id)
        )
        if cur.rowcount == 0:
            return jsonify({'error': 'Session not found'}), 404
    return jsonify({'success': True})


@app.route('/api/session/<session_id>/pre-survey', methods=['PUT'])
def save_pre_survey(session_id):
    data = request.get_json()
    with get_db() as conn:
        conn.execute(
            'UPDATE participants SET pre_pa_score=?, pre_na_score=?, pre_answers=? WHERE session_id=?',
            (data['paScore'], data['naScore'], json.dumps(data['answers']), session_id)
        )
    return jsonify({'success': True})


@app.route('/api/session/<session_id>/post-survey', methods=['PUT'])
def save_post_survey(session_id):
    data = request.get_json()
    with get_db() as conn:
        conn.execute(
            'UPDATE participants SET post_pa_score=?, post_na_score=?, post_answers=? WHERE session_id=?',
            (data['paScore'], data['naScore'], json.dumps(data['answers']), session_id)
        )
    return jsonify({'success': True})


@app.route('/api/session/<session_id>/chat-log', methods=['PUT'])
def save_chat_log(session_id):
    data = request.get_json()
    with get_db() as conn:
        conn.execute(
            'UPDATE participants SET chat_messages=?, chat_duration=? WHERE session_id=?',
            (json.dumps(data['messages'], ensure_ascii=False), data['duration'], session_id)
        )
    return jsonify({'success': True})


@app.route('/api/session/<session_id>/feedback', methods=['PUT'])
def save_feedback(session_id):
    data = request.get_json()
    with get_db() as conn:
        conn.execute(
            'UPDATE participants SET feedback=? WHERE session_id=?',
            (json.dumps(data, ensure_ascii=False), session_id)
        )
    return jsonify({'success': True})


@app.route('/api/chat', methods=['POST'])
def chat_proxy():
    api_key = os.getenv('AI_API_KEY')
    api_url = os.getenv('AI_API_URL', 'https://api.openai.com/v1/chat/completions')
    model = os.getenv('AI_MODEL', 'gpt-3.5-turbo')

    if not api_key:
        return jsonify({'error': 'AI API key not configured'}), 500

    data = request.get_json()
    try:
        resp = requests.post(
            api_url,
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {api_key}'
            },
            json={
                'model': model,
                'messages': data['messages'],
                'max_tokens': 500,
                'temperature': 0.8
            },
            timeout=30
        )
        resp.raise_for_status()
        return jsonify(resp.json())
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 502


@app.route('/api/session/<session_id>/results', methods=['GET'])
def get_results(session_id):
    with get_db() as conn:
        row = conn.execute(
            'SELECT * FROM participants WHERE session_id=?', (session_id,)
        ).fetchone()
        if not row:
            return jsonify({'error': 'Session not found'}), 404
        return jsonify(dict(row))


@app.route('/api/admin/export', methods=['GET'])
def export_all():
    with get_db() as conn:
        rows = conn.execute(
            'SELECT * FROM participants WHERE age IS NOT NULL'
        ).fetchall()
        return jsonify([dict(r) for r in rows])


if __name__ == '__main__':
    port = int(os.getenv('PORT', 8080))
    print(f'\n  ✅ 研究网站已启动: http://localhost:{port}\n')
    app.run(host='0.0.0.0', port=port, debug=False)
