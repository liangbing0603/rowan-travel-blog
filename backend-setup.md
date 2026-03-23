# 动态网站后端设置指南

## 1. 表单处理 - Formspree（免费）

### 步骤：
1. 访问 https://formspree.io/ 注册免费账户
2. 创建新表单，获取表单ID
3. 将表单ID添加到网站代码中

### 修改 consultation.html：
```html
<!-- 替换第92行的表单 -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- 保持所有现有字段 -->
  <input type="hidden" name="_subject" value="新旅行咨询请求 - Wanderlust Adventures">
  <input type="hidden" name="_replyto" value="{{email}}">
  <input type="text" name="_gotcha" style="display:none">
</form>
```

### 修改 contact.html：
```html
<!-- 替换联系表单 -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- 保持所有现有字段 -->
  <input type="hidden" name="_subject" value="网站联系请求">
</form>
```

## 2. 实时聊天 - Tidio（免费）

### 步骤：
1. 访问 https://www.tidio.com/ 注册免费账户
2. 获取聊天代码
3. 添加到所有页面

### 添加到所有HTML文件的</body>前：
```html
<!-- Tidio Chat -->
<script src="//code.tidio.co/YOUR_TIDIO_KEY.js" async></script>
```

## 3. 评论系统 - Disqus（免费）

### 步骤：
1. 访问 https://disqus.com/ 注册
2. 创建新网站，获取shortname
3. 添加到博客页面

### 添加到 blog.html 的博客文章后：
```html
<div id="disqus_thread"></div>
<script>
    var disqus_config = function () {
        this.page.url = PAGE_URL;
        this.page.identifier = PAGE_IDENTIFIER;
    };
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://YOUR_SHORTNAME.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
```

## 4. 预约系统 - Calendly（免费）

### 步骤：
1. 访问 https://calendly.com/ 注册
2. 设置你的可用时间
3. 获取嵌入代码

### 添加到 consultation.html：
```html
<!-- 在咨询页面添加预约按钮 -->
<div class="calendly-section">
    <h3>Schedule a Video Call</h3>
    <p>Prefer to discuss your travel plans live? Book a 30-minute video consultation.</p>
    <!-- Calendly inline widget -->
    <div class="calendly-inline-widget" 
         data-url="https://calendly.com/YOUR_USERNAME" 
         style="min-width:320px;height:630px;"></div>
</div>
```

## 5. 数据库集成 - Supabase（免费）

### 如果需要用户系统：
1. 访问 https://supabase.com/ 注册
2. 创建新项目
3. 设置数据库表
4. 获取API密钥

### 基本用户表结构：
```sql
-- 用户表
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    phone TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 咨询表
CREATE TABLE consultations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    destination TEXT,
    travelers INTEGER,
    budget TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT NOW()
);
```

## 6. 部署选项

### 免费托管：
1. **GitHub Pages** - 静态网站
2. **Netlify** - 静态+表单处理
3. **Vercel** - 静态+Serverless函数
4. **Railway** - 全栈应用

### 推荐部署流程：
```bash
# 1. 创建GitHub仓库
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wanderlust-adventures.git
git push -u origin main

# 2. 部署到Netlify
# - 访问 https://netlify.com
# - 连接GitHub仓库
# - 自动部署完成
```

## 7. 后台管理（可选）

### 使用简单的管理面板：
```html
<!-- admin.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Admin Panel - Wanderlust Adventures</title>
</head>
<body>
    <h1>咨询管理</h1>
    <div id="consultations-list"></div>
    
    <script>
        // 从Supabase获取咨询数据
        async function loadConsultations() {
            const { data, error } = await supabase
                .from('consultations')
                .select('*')
                .order('created_at', { ascending: false });
            
            if (error) {
                console.error('Error:', error);
                return;
            }
            
            // 显示咨询列表
            const list = document.getElementById('consultations-list');
            list.innerHTML = data.map(item => `
                <div class="consultation-item">
                    <h3>${item.name} - ${item.destination}</h3>
                    <p>${item.message}</p>
                    <small>${new Date(item.created_at).toLocaleString()}</small>
                </div>
            `).join('');
        }
        
        loadConsultations();
    </script>
</body>
</html>
```

## 8. 安全设置

### 重要安全措施：
1. **表单验证** - 客户端和服务端都要验证
2. **CORS设置** - 限制跨域请求
3. **API密钥保护** - 不要暴露在客户端代码中
4. **输入清理** - 防止XSS攻击
5. **HTTPS** - 强制使用SSL

## 9. 监控和维护

### 监控工具：
1. **Google Analytics** - 流量分析
2. **Uptime Robot** - 网站可用性监控
3. **LogRocket** - 用户行为记录

### 定期维护：
- 每周检查表单提交
- 每月备份数据库
- 每季度更新内容
- 每年审查安全设置

## 10. 扩展功能（未来）

### 可以添加的功能：
1. **用户个人资料** - 保存旅行偏好
2. **旅行计划器** - 交互式行程规划
3. **社区论坛** - 用户交流平台
4. **照片分享** - 用户上传旅行照片
5. **旅行伙伴匹配** - 寻找同行者

---

**立即行动步骤：**
1. 注册 Formspree 并设置表单
2. 注册 Tidio 添加实时聊天
3. 部署网站到 Netlify
4. 测试所有功能
5. 分享给亲戚朋友