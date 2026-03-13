#!/bin/bash
cd "$(dirname "$0")"

echo ""
if [ -f data/server.pid ]; then
    PID=$(cat data/server.pid)
    if kill -0 "$PID" 2>/dev/null; then
        kill "$PID"
        rm -f data/server.pid
        echo "✅ 服务器已停止 (PID: $PID)"
    else
        rm -f data/server.pid
        echo "⚠️  服务器已经不在运行了"
    fi
else
    echo "⚠️  没有找到运行中的服务器"
fi

# 清理可能残留的端口占用
lsof -ti:8080 | xargs kill -9 2>/dev/null
echo ""
