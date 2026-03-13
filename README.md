# AI 情感影响研究网站

研究课题：机器对人类的情感影响  
量表原型：PANAS（Watson, Clark & Tellegen, 1988）

## 快速开始

### 1. 安装依赖

```bash
pip3 install -r requirements.txt
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`，并填入你的 AI API 密钥：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```
AI_API_KEY=你的API密钥
AI_API_URL=https://api.openai.com/v1/chat/completions
AI_MODEL=gpt-3.5-turbo
```

### 3. 启动服务器

```bash
python3 app.py
```

访问 http://localhost:8080（端口可在 `.env` 中修改）

## 数据导出

访问 `/api/admin/export` 可导出所有参与者数据（JSON 格式）。

数据库文件位于 `data/research.db`（SQLite），可用 DB Browser for SQLite 等工具直接查看。

## 技术栈

- **后端**：Python Flask + SQLite
- **前端**：原生 HTML/CSS/JS + Chart.js
- **量表**：PANAS 量表拆分为等价的 Form A / Form B

## 部署

可部署到 Railway、Render、PythonAnywhere 等平台。确保设置环境变量即可。
