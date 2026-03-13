#!/bin/bash
cd "$(dirname "$0")"

echo ""
echo "================================"
echo "  AI 情感影响研究 - 服务器管理"
echo "================================"
echo ""

# 检查是否已在运行
if [ -f data/server.pid ]; then
    OLD_PID=$(cat data/server.pid)
    if kill -0 "$OLD_PID" 2>/dev/null; then
        echo "✅ 服务器已在运行中 (PID: $OLD_PID)"
        echo "   访问地址: http://localhost:8080"
        echo ""
        echo "   如需重启，请先运行: ./stop.sh"
        exit 0
    fi
fi

# 清理可能占用端口的旧进程
lsof -ti:8080 | xargs kill -9 2>/dev/null
sleep 1

# 后台启动服务器，日志写入文件
mkdir -p data
nohup python3 app.py > data/server.log 2>&1 &
echo $! > data/server.pid

sleep 2

# 验证是否启动成功
if kill -0 $(cat data/server.pid) 2>/dev/null; then
    echo "✅ 服务器已成功启动！"
    echo "   访问地址: http://localhost:8080"
    echo "   进程 PID: $(cat data/server.pid)"
    echo "   日志文件: data/server.log"
    echo ""
    echo "   关闭终端不会影响服务器运行。"
    echo "   停止服务器请运行: ./stop.sh"
else
    echo "❌ 服务器启动失败，请查看日志:"
    cat data/server.log
fi
echo ""
