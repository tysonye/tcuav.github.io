# 通程智能 - 无人机技术与解决方案

一个专业的无人机技术与解决方案提供商网站，专注于为各行业提供高质量的无人机应用服务。

## 🌟 项目特点

### 核心功能
- ✅ **动态内容管理**：通过GitHub Issues管理项目和新闻内容
- ✅ **响应式设计**：适配各种屏幕尺寸，提供良好的移动端体验
- ✅ **深色模式支持**：自动根据系统设置切换，也可手动切换
- ✅ **平滑滚动**：优化页面导航体验
- ✅ **现代化UI**：采用Tailwind CSS构建的美观界面
- ✅ **社交媒体集成**：支持微信、抖音、小红书、快手等社交媒体平台，带有二维码弹窗
- ✅ **SEO优化**：自动更新sitemap.xml，提升搜索引擎排名
- ✅ **自动部署**：GitHub Actions自动化部署流程

### 技术亮点
- 🔧 基于React 18 + TypeScript开发
- 🎨 使用Tailwind CSS实现响应式设计
- 🏗️ Vite构建工具，快速的开发体验
- 🚀 GitHub Actions自动化部署
- 📱 优化的移动端体验
- 🔒 安全的代码实践

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 18+ | 前端框架 |
| TypeScript | 5+ | 类型安全 |
| Tailwind CSS | 3+ | 样式框架 |
| Vite | 6+ | 构建工具 |
| GitHub Pages | - | 静态站点部署 |
| GitHub Actions | - | CI/CD自动化 |

## 📦 快速开始

### 环境要求
- Node.js 18+ 
- npm 9+ 或 yarn 1.22+ 或 pnpm 8+ 

### 安装依赖
```bash
npm install
```

### 本地开发
```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建项目
```bash
npm run build
```

构建产物将生成在 `dist` 目录，同时自动更新sitemap.xml的lastmod日期

### 预览构建结果
```bash
npm run preview
```

### 部署到GitHub Pages
```bash
npm run deploy
```

## 🚀 部署说明

### 自动化部署
本项目已配置GitHub Actions自动部署流程：
1. 当代码推送到 `main` 分支时，自动触发构建
2. 构建前自动更新sitemap.xml的lastmod日期
3. 构建成功后，自动部署到GitHub Pages
4. 部署结果可在Actions页面查看

### 手动部署
使用以下命令手动部署：
```bash
npm run deploy
```

## 📁 项目结构

```
├── src/
│   ├── components/        # React组件
│   │   ├── About.tsx      # 关于我们
│   │   ├── Clients.tsx    # 客户案例
│   │   ├── Contact.tsx    # 联系我们
│   │   ├── Footer.tsx     # 页脚
│   │   ├── Hero.tsx       # 首页英雄区
│   │   ├── Navbar.tsx     # 导航栏
│   │   ├── News.tsx       # 新闻动态
│   │   ├── Projects.tsx   # 无人机方案
│   │   ├── Quiz.tsx       # 在线测试
│   │   └── Skills.tsx     # 核心技术
│   ├── data/              # 数据文件
│   │   ├── questions-caac.json     # 民航局题库
│   │   ├── questions-level3.json   # 三级题库
│   │   ├── questions-level4.json   # 四级题库
│   │   └── questions-level5.json   # 五级题库
│   ├── hooks/             # 自定义钩子
│   │   └── useTheme.ts    # 主题切换钩子
│   ├── lib/               # 工具库
│   │   └── mockData.ts    # 模拟数据
│   ├── utils/             # 工具函数
│   │   ├── githubApi.ts   # GitHub API调用
│   │   └── smoothScroll.ts # 平滑滚动
│   ├── App.tsx            # 应用主组件
│   ├── index.css          # 全局样式
│   ├── main.tsx           # 应用入口
│   └── vite-env.d.ts      # Vite环境类型定义
├── .github/workflows/     # GitHub Actions工作流
│   └── deploy.yml         # 部署配置
├── public/                # 静态资源
│   ├── image/             # 图片资源
│   └── favicon.ico        # 网站图标
├── dist/                  # 构建产物
├── index.html             # HTML模板
├── package.json           # 项目配置
├── sitemap.xml            # 网站地图
├── update-sitemap.js      # 自动更新sitemap脚本
├── tailwind.config.js     # Tailwind CSS配置
├── tsconfig.json          # TypeScript配置
└── vite.config.ts         # Vite配置
```

## 🔄 内容管理

项目支持通过GitHub Issues管理以下内容，无需修改代码即可更新网站内容：

### 1. 基本概念

- **标签系统**：使用特定标签标识内容类型
- **JSON格式**：Issues正文使用JSON格式存储详细数据
- **自动部署**：提交或更新Issue后，网站会自动重新构建并部署

### 2. 管理项目内容

#### 创建项目Issue
1. 进入GitHub仓库的Issues页面
2. 点击"New issue"按钮
3. 填写Issue标题（项目名称）
4. 添加标签：
   - 必须添加：`project`（标识为项目类型）
   - 可选添加：分类标签（如：`水域管理`、`林业巡护`、`农业植保`等）
5. 填写Issue正文，使用以下JSON格式：

```json
{
  "title": "项目名称",
  "description": "项目简短描述，将显示在卡片上",
  "imageUrl": "/image/项目图片路径.jpg",
  "technologies": ["技术1", "技术2", "技术3"],
  "link": "项目链接（可选）",
  "client": "客户名称",
  "year": "2026",
  "category": "分类名称",
  "details": {
    "overview": "项目详细概述",
    "features": ["核心功能1", "核心功能2", "核心功能3"],
    "benefits": ["项目收益1", "项目收益2", "项目收益3"],
    "implementation": ["实现步骤1", "实现步骤2", "实现步骤3"]
  }
}
```

6. 点击"Submit new issue"保存

#### 项目字段说明
- `title`：项目名称（必填）
- `description`：项目简短描述，限制200字符（必填）
- `imageUrl`：项目图片路径，建议使用 `/image/` 开头的相对路径（必填）
- `technologies`：项目使用的技术栈数组（可选）
- `link`：项目相关链接（可选）
- `client`：客户名称（可选）
- `year`：项目年份（可选，默认使用Issue创建年份）
- `category`：项目分类（可选，默认使用标签中的分类）
- `details`：项目详细信息（可选）
  - `overview`：项目详细概述
  - `features`：核心功能列表
  - `benefits`：项目收益列表
  - `implementation`：实现步骤列表

### 3. 管理新闻内容

#### 创建新闻Issue
1. 进入GitHub仓库的Issues页面
2. 点击"New issue"按钮
3. 填写Issue标题（新闻标题）
4. 添加标签：
   - 必须添加：`news`（标识为新闻类型）
   - 可选添加：分类标签（如：`公司动态`、`行业资讯`、`技术前沿`等）
5. 填写Issue正文，使用以下JSON格式：

```json
{
  "title": "新闻标题",
  "content": "新闻简短内容，将显示在卡片上",
  "date": "2026-01-18",
  "imageUrl": "/image/新闻图片路径.jpg",
  "category": "新闻分类",
  "details": {
    "fullContent": ["新闻详细内容段落1", "新闻详细内容段落2"],
    "tags": ["标签1", "标签2"],
    "author": "作者名称",
    "source": "新闻来源"
  }
}
```

6. 点击"Submit new issue"保存

#### 新闻字段说明
- `title`：新闻标题（必填）
- `content`：新闻简短内容（必填）
- `date`：新闻日期，格式为YYYY-MM-DD（可选，默认使用Issue创建日期）
- `imageUrl`：新闻图片路径，建议使用 `/image/` 开头的相对路径（可选）
- `category`：新闻分类（可选，默认使用标签中的分类）
- `details`：新闻详细信息（可选）
  - `fullContent`：新闻详细内容数组，每个元素为一个段落
  - `tags`：新闻标签数组
  - `author`：作者名称
  - `source`：新闻来源

### 4. 更新和删除内容

#### 更新内容
1. 进入GitHub仓库的Issues页面
2. 找到需要更新的Issue
3. 点击Issue标题进入详情页
4. 点击"Edit"按钮编辑Issue
5. 修改标题、标签或JSON内容
6. 点击"Update issue"保存

#### 删除内容
1. 进入GitHub仓库的Issues页面
2. 找到需要删除的Issue
3. 点击Issue标题进入详情页
4. 点击"Close issue"按钮关闭Issue
5. 关闭后的Issue将不再显示在网站上

### 5. 高级技巧

#### 使用分类标签
- 为Issue添加额外的标签（除了`project`或`news`）可以实现内容分类
- 例如：为项目Issue添加`农业植保`标签，该项目将显示在"农业植保"分类下
- 分类标签将自动显示在网站的分类筛选器中

#### 使用Markdown（可选）
- 虽然推荐使用JSON格式，但也可以直接在Issue正文中使用Markdown格式
- 系统会自动将Markdown内容转换为适合网站显示的格式

#### 图片管理
- 所有图片建议上传到`public/image/`目录下
- 使用相对路径引用图片：`/image/图片名称.jpg`
- 建议图片尺寸：项目图片600x400像素，新闻图片800x450像素

### 6. 内容显示规则

- **排序规则**：按Issue创建时间倒序排序，最新的内容显示在最前面
- **状态过滤**：只显示"Open"状态的Issue
- **自动部署**：Issue创建或更新后，GitHub Actions会自动重新构建网站
- **缓存机制**：网站会缓存内容，更新后可能需要几分钟才能在网站上看到变化

### 7. 示例Issue

#### 项目示例
```json
{
  "title": "农业植保无人机解决方案",
  "description": "为农业合作社提供的无人机植保解决方案，实现了精准喷洒、病虫害监测和作物生长分析。",
  "imageUrl": "/image/nyzb.jpg",
  "technologies": ["无人机飞控", "AI图像识别", "精准导航"],
  "client": "安徽农业合作社",
  "year": "2026",
  "category": "农业植保",
  "details": {
    "overview": "本项目为农业合作社提供了一套完整的无人机植保解决方案，包括硬件设备、软件平台和数据分析服务。",
    "features": ["精准喷洒系统", "实时病虫害监测", "作物生长分析", "智能航线规划"],
    "benefits": ["农药使用量减少30%", "作物产量提升15%", "作业效率提高10倍"],
    "implementation": ["需求分析与方案设计", "硬件设备采购与调试", "软件平台开发", "现场测试与优化"]
  }
}
```

#### 新闻示例
```json
{
  "title": "通程智能推出新一代农业无人机",
  "content": "通程智能科技有限公司今日正式发布了新一代农业植保无人机，具备更长的续航时间和更高的作业精度。",
  "date": "2026-01-18",
  "imageUrl": "/image/nyzb.jpg",
  "category": "公司动态",
  "details": {
    "fullContent": [
      "通程智能科技有限公司今日正式发布了新一代农业植保无人机TC-AGRI Pro，该产品具备以下特点：",
      "- 续航时间达到50分钟，比上一代产品提升25%",
      "- 配备了最新的AI图像识别系统，能够精准识别病虫害",
      "- 支持自主航线规划和自动避障功能",
      "- 作业精度达到厘米级，农药使用量减少30%"
    ],
    "tags": ["新产品", "农业植保"],
    "author": "通程智能",
    "source": "公司新闻"
  }
}
```

## 📱 社交媒体集成

网站集成了多种社交媒体平台，包括：
- 微信
- 抖音
- 小红书
- 快手

每个社交媒体按钮都带有二维码弹窗功能，方便用户快速关注。

## 🔍 SEO优化

项目包含以下SEO优化功能：
- 自动生成和更新sitemap.xml
- 响应式设计，适配移动设备
- 语义化HTML结构
- 优化的页面加载速度
- 清晰的导航结构

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/AmazingFeature`
3. 提交更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 网站：[https://tcuav.github.io](https://tcuav.github.io)
- GitHub：[https://github.com/tysonye/tcuav.github.io](https://github.com/tysonye/tcuav.github.io)
- 电话：+86 13397155725
- 地址：安徽省桐城市文昌街道和平路和平尚城6#209室

## 📊 项目状态

![GitHub Stars](https://img.shields.io/github/stars/tysonye/tcuav.github.io?style=social)
![GitHub Forks](https://img.shields.io/github/forks/tysonye/tcuav.github.io?style=social)
![GitHub Issues](https://img.shields.io/github/issues/tysonye/tcuav.github.io)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/tysonye/tcuav.github.io)

---

**通程智能科技** - 专业的无人机技术与解决方案提供商