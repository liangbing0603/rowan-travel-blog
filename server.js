// 旅行咨询网站后端服务器
// 使用：node server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // 提供静态文件

// 数据文件路径
const DATA_DIR = path.join(__dirname, 'data');
const CONSULTATIONS_FILE = path.join(DATA_DIR, 'consultations.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

// 确保数据目录存在
async function ensureDataDir() {
    try {
        await fs.mkdir(DATA_DIR, { recursive: true });
        
        // 初始化数据文件如果不存在
        try {
            await fs.access(CONSULTATIONS_FILE);
        } catch {
            await fs.writeFile(CONSULTATIONS_FILE, JSON.stringify([], null, 2));
        }
        
        try {
            await fs.access(CONTACTS_FILE);
        } catch {
            await fs.writeFile(CONTACTS_FILE, JSON.stringify([], null, 2));
        }
        
        console.log('数据目录和文件已初始化');
    } catch (error) {
        console.error('初始化数据目录失败:', error);
    }
}

// 1. 提交旅行咨询
app.post('/api/consultation', async (req, res) => {
    try {
        const consultation = {
            id: Date.now().toString(),
            ...req.body,
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        // 读取现有数据
        const data = await fs.readFile(CONSULTATIONS_FILE, 'utf8');
        const consultations = JSON.parse(data);
        
        // 添加新咨询
        consultations.push(consultation);
        
        // 保存数据
        await fs.writeFile(CONSULTATIONS_FILE, JSON.stringify(consultations, null, 2));
        
        console.log('新咨询提交:', consultation.name, '-', consultation.destination);
        
        // 在这里可以添加邮件通知功能
        // sendEmailNotification(consultation);
        
        res.json({
            success: true,
            message: '咨询提交成功！我会在24小时内回复。',
            data: consultation
        });
    } catch (error) {
        console.error('处理咨询提交失败:', error);
        res.status(500).json({
            success: false,
            message: '提交失败，请稍后重试。'
        });
    }
});

// 2. 提交联系表单
app.post('/api/contact', async (req, res) => {
    try {
        const contact = {
            id: Date.now().toString(),
            ...req.body,
            createdAt: new Date().toISOString()
        };

        const data = await fs.readFile(CONTACTS_FILE, 'utf8');
        const contacts = JSON.parse(data);
        
        contacts.push(contact);
        await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
        
        console.log('新联系请求:', contact.name, '-', contact.email);
        
        res.json({
            success: true,
            message: '消息发送成功！',
            data: contact
        });
    } catch (error) {
        console.error('处理联系表单失败:', error);
        res.status(500).json({
            success: false,
            message: '发送失败，请稍后重试。'
        });
    }
});

// 3. 获取所有咨询（需要身份验证）
app.get('/api/consultations', async (req, res) => {
    try {
        // 简单的API密钥验证
        const apiKey = req.headers['x-api-key'];
        if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
            return res.status(401).json({
                success: false,
                message: '未授权访问'
            });
        }
        
        const data = await fs.readFile(CONSULTATIONS_FILE, 'utf8');
        const consultations = JSON.parse(data);
        
        res.json({
            success: true,
            data: consultations
        });
    } catch (error) {
        console.error('获取咨询列表失败:', error);
        res.status(500).json({
            success: false,
            message: '获取数据失败'
        });
    }
});

// 4. 更新咨询状态
app.put('/api/consultations/:id', async (req, res) => {
    try {
        const apiKey = req.headers['x-api-key'];
        if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
            return res.status(401).json({
                success: false,
                message: '未授权访问'
            });
        }
        
        const { id } = req.params;
        const { status } = req.body;
        
        const data = await fs.readFile(CONSULTATIONS_FILE, 'utf8');
        let consultations = JSON.parse(data);
        
        const index = consultations.findIndex(c => c.id === id);
        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: '咨询未找到'
            });
        }
        
        consultations[index].status = status;
        consultations[index].updatedAt = new Date().toISOString();
        
        await fs.writeFile(CONSULTATIONS_FILE, JSON.stringify(consultations, null, 2));
        
        res.json({
            success: true,
            message: '状态更新成功',
            data: consultations[index]
        });
    } catch (error) {
        console.error('更新咨询状态失败:', error);
        res.status(500).json({
            success: false,
            message: '更新失败'
        });
    }
});

// 5. 订阅新闻通讯
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email || !email.includes('@')) {
            return res.status(400).json({
                success: false,
                message: '请输入有效的邮箱地址'
            });
        }
        
        // 这里可以集成邮件服务如Mailchimp
        console.log('新订阅:', email);
        
        res.json({
            success: true,
            message: '订阅成功！'
        });
    } catch (error) {
        console.error('处理订阅失败:', error);
        res.status(500).json({
            success: false,
            message: '订阅失败'
        });
    }
});

// 6. 健康检查
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: '服务器运行正常',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// 7. 管理后台页面
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// 启动服务器
async function startServer() {
    await ensureDataDir();
    
    app.listen(PORT, () => {
        console.log(`
        🚀 旅行咨询网站后端服务器已启动！
        
        访问地址：
        - 网站首页: http://localhost:${PORT}
        - 咨询页面: http://localhost:${PORT}/consultation.html
        - 管理后台: http://localhost:${PORT}/admin
        - API健康检查: http://localhost:${PORT}/api/health
        
        服务器运行在端口: ${PORT}
        `);
    });
}

startServer().catch(console.error);

// 简单的邮件通知函数（需要配置邮件服务）
async function sendEmailNotification(consultation) {
    // 这里可以集成邮件服务如Nodemailer、SendGrid等
    console.log('📧 发送邮件通知:', {
        to: 'your-email@example.com', // 你的邮箱
        subject: `新旅行咨询: ${consultation.name} - ${consultation.destination}`,
        text: `
姓名: ${consultation.name}
邮箱: ${consultation.email}
电话: ${consultation.phone || '未提供'}
目的地: ${consultation.destination}
旅行人数: ${consultation.travelers}
预算: ${consultation.budget}
旅行日期: ${consultation.dates}
兴趣: ${consultation.interests?.join(', ') || '未指定'}
        
详细问题:
${consultation.message}
        
提交时间: ${consultation.createdAt}
        `
    });
}

// 处理未捕获的异常
process.on('uncaughtException', (error) => {
    console.error('未捕获的异常:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的Promise拒绝:', reason);
});