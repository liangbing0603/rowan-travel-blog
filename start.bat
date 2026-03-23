@echo off
chcp 65001 >nul
echo ============================================
echo     Rowan旅行咨询网站 - 一键启动
echo ============================================
echo.

echo 检查Node.js环境...
node --version >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误：Node.js未安装！
    echo 请访问 https://nodejs.org/ 下载安装
    echo 安装时请勾选"Add to PATH"
    pause
    exit /b 1
)
echo ✅ Node.js已安装
node --version
echo.

echo 检查npm...
npm --version >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 错误：npm未找到！
    echo 请重新安装Node.js
    pause
    exit /b 1
)
echo ✅ npm已安装
npm --version
echo.

echo 检查依赖包...
if not exist "node_modules" (
    echo ⚠️ 依赖包未安装，正在安装...
    echo 这可能需要几分钟，请耐心等待...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ 依赖包安装失败！
        echo 请检查网络连接
        pause
        exit /b 1
    )
    echo ✅ 依赖包安装完成
) else (
    echo ✅ 依赖包已存在
)
echo.

echo 检查数据目录...
if not exist "data" (
    mkdir data
    echo ✅ 创建data目录
)
if not exist "data\consultations.json" (
    echo [] > data\consultations.json
    echo ✅ 创建consultations.json
)
echo.

echo 检查端口3000...
netstat -ano | findstr :3000 >nul
if %errorlevel% equ 0 (
    echo ⚠️ 端口3000被占用！
    echo 请关闭占用3000端口的程序
    echo 或修改server.js中的端口号
    echo.
    echo 按任意键查看占用进程...
    pause >nul
    netstat -ano | findstr :3000
    echo.
    echo 按任意键继续尝试启动...
    pause >nul
)
echo.

echo 🚀 启动服务器...
echo 网站将在浏览器中自动打开...
echo 访问地址：http://localhost:3000
echo.
echo 按 Ctrl+C 停止服务器
echo.

timeout /t 3 /nobreak >nul

start http://localhost:3000

echo 正在启动Node.js服务器...
echo ============================================
node server.js

if %errorlevel% neq 0 (
    echo.
    echo ❌ 服务器启动失败！
    echo 可能的原因：
    echo 1. 端口3000被占用
    echo 2. 依赖包问题
    echo 3. 文件权限问题
    echo.
    echo 按任意键退出...
    pause >nul
    exit /b 1
)