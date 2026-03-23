# 🌐 动态网站部署指南 - 支持 http://localhost:3000/

## 🎯 部署目标
部署完整的动态旅行咨询网站，包含：
- Node.js后端服务器
- 咨询数据存储
- 管理后台
- 完整的API接口

## 📁 文件结构
```
📦 动态网站部署包/
├── 📄 server.js              # Node.js服务器（端口3000）
├── 📄 package.json          # 项目配置
├── 📄 package-lock.json     # 依赖锁定
├── 📄 index.html            # 网站首页
├── 📄 destinations.html     # 目的地页面
├── 📄 blog.html            # 博客页面
├── 📄 about.html           # 关于页面
├── 📄 contact.html         # 联系页面
├── 📄 consultation.html    # 咨询页面（动态功能）
├── 📄 admin.html           # 管理后台
├── 📄 style.css            # 样式文件
├── 📄 script.js            # 交互脚本
└── 📁 data/                # 数据目录
    ├── 📄 consultations.json  # 咨询记录
    └── 📄 contacts.json      # 联系信息
```

## 🚀 本地运行（http://localhost:3000）

### 第1步：安装Node.js
1. 下载安装：https://nodejs.org/
2. 选择LTS版本
3. 安装时勾选"Add to PATH"

### 第2步：启动网站
```bash
# 1. 打开命令提示符（CMD）
# 2. 进入项目目录
cd C:\Users\TK\.openclaw\workspace\动态网站部署包

# 3. 安装依赖（第一次运行）
npm install

# 4. 启动服务器
node server.js
```

### 第3步：访问网站
1. 打开浏览器
2. 访问：http://localhost:3000
3. 或访问：http://localhost:3000/consultation.html

## 🌐 部署到公网（让朋友访问）

### 方案A：Vercel（推荐，免费）
**特点：** 支持Node.js，自动部署
**网址格式：** `https://rowan-travel.vercel.app`

#### 部署步骤：
1. 注册Vercel：https://vercel.com（用GitHub登录）
2. 点击"Add New" → "Project"
3. 导入GitHub仓库（需要先上传到GitHub）
4. 自动部署，获得网址

### 方案B：Railway（免费额度）
**特点：** 支持数据库，易于部署
**步骤：**
1. 注册Railway：https://railway.app
2. 部署项目
3. 获得网址

### 方案C：Heroku（免费）
**特点：** 老牌云平台
**步骤：**
1. 注册Heroku：https://heroku.com
2. 使用Heroku CLI部署

## 📱 功能说明

### 1. 咨询功能
- 用户提交咨询 → 保存到数据库
- 实时显示在管理后台
- 状态管理（待处理/已查看/已回复）

### 2. 管理后台
- 查看所有咨询记录
- 更新咨询状态
- 导出数据

### 3. API接口
```
GET    /api/consultations      # 获取所有咨询
POST   /api/consultations      # 提交新咨询
GET    /api/consultations/:id  # 获取单个咨询
PUT    /api/consultations/:id  # 更新咨询状态
```

## 🔧 配置说明

### 端口配置
默认端口：3000
如需修改，编辑`server.js`：
```javascript
const PORT = 3000; // 改为其他端口
```

### 联系方式配置
所有页面已配置：
- **电话：** 19913662086
- **邮箱：** 19913662086@163.com

### 数据存储
- 咨询数据：`data/consultations.json`
- 联系信息：`data/contacts.json`
- 自动备份，不会丢失数据

## 🎯 测试步骤

### 本地测试：
1. 启动服务器：`node server.js`
2. 访问：http://localhost:3000
3. 提交测试咨询
4. 查看管理后台：http://localhost:3000/admin

### 公网测试：
1. 部署到Vercel/Railway
2. 访问提供的网址
3. 用手机测试
4. 让朋友测试

## 🆘 常见问题

### 问题1：端口3000被占用
**解决：**
```bash
# 查看占用端口的进程
netstat -ano | findstr :3000

# 或修改server.js中的端口
const PORT = 3001;
```

### 问题2：npm install失败
**解决：**
```bash
# 清除缓存
npm cache clean --force

# 重新安装
npm install
```

### 问题3：数据库文件权限
**解决：** 确保`data/`目录有写入权限

### 问题4：部署后咨询功能失效
**解决：** 确保部署平台支持Node.js和文件写入

## 💡 高级功能

### 邮件通知（可选）
配置邮件服务，咨询提交时自动发送邮件通知

### 数据库升级（可选）
将JSON文件替换为MongoDB或MySQL

### 用户认证（可选）
为管理后台添加登录功能

## 📞 技术支持

### 联系方式：
- **电话：** 19913662086
- **邮箱：** 19913662086@163.com

### 需要帮助：
1. 截图错误信息
2. 描述具体问题
3. 我会帮你解决

## 🎉 成功部署后

### 你的网站将拥有：
1. **完整的动态功能** - 咨询提交和存储
2. **管理后台** - 查看和管理咨询
3. **手机友好** - 响应式设计
4. **专业外观** - 自然旅行风格

### 朋友可以：
1. 访问你的网站网址
2. 提交旅行咨询
3. 浏览你的旅行博客
4. 直接联系你

---
**部署时间：** 2026-03-23  
**服务器端口：** 3000  
**目标：** 完整的动态旅行咨询网站