# 通程智能 - 无人机技术与解决方案

一个专业的无人机技术与解决方案提供商网站，专注于为各行业提供高质量的无人机应用服务。

## 🌟 项目特点

### 核心功能
- ✅ **在线刷题系统**：包含500道无人机相关题目，支持随机排序、搜索和答案解析
- ✅ **动态内容管理**：通过GitHub Issues管理技能、项目和新闻内容
- ✅ **响应式设计**：适配各种屏幕尺寸，提供良好的移动端体验
- ✅ **深色模式支持**：自动根据系统设置切换，也可手动切换
- ✅ **平滑滚动**：优化页面导航体验
- ✅ **现代化UI**：采用Tailwind CSS构建的美观界面

### 技术亮点
- 🔧 基于React 18 + TypeScript开发
- 🎨 使用Tailwind CSS实现响应式设计
- 🏗️ Vite构建工具，快速的开发体验
- 🚀 GitHub Actions自动化部署
- 📱 支持PWA（渐进式Web应用）
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

构建产物将生成在 `dist` 目录

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
2. 构建成功后，自动部署到GitHub Pages
3. 部署结果可在Actions页面查看

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
│   │   ├── Contact.tsx    # 联系我们
│   │   ├── Footer.tsx     # 页脚
│   │   ├── Hero.tsx       # 首页英雄区
│   │   ├── Navbar.tsx     # 导航栏
│   │   ├── News.tsx       # 新闻动态
│   │   ├── Projects.tsx   # 无人机方案
│   │   ├── Quiz.tsx       # 在线刷题
│   │   └── Skills.tsx     # 核心技术
│   ├── data/              # 数据文件
│   │   └── questions.json # 题库数据
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
├── dist/                  # 构建产物
├── index.html             # HTML模板
├── package.json           # 项目配置
├── tailwind.config.js     # Tailwind CSS配置
├── tsconfig.json          # TypeScript配置
└── vite.config.ts         # Vite配置
```

## 📝 在线刷题功能

### 功能介绍
- **500道题目**：涵盖无人机理论、法规、技术等多个方面
- **随机排序**：每次刷新页面自动打乱题目顺序
- **实时搜索**：支持按题目内容搜索，快速定位题目
- **答案解析**：提供详细的答案解析，帮助理解知识点
- **进度追踪**：显示当前进度和得分情况
- **多种题型**：包括选择题、判断题等

### 使用说明
1. 访问网站首页，点击"在线刷题"导航项
2. 在搜索框中输入关键词可搜索题目
3. 选择答案后点击"检查答案"查看结果
4. 点击"下一题"或"上一题"切换题目
5. 完成所有题目后查看最终成绩

## 🔄 内容管理

项目支持通过GitHub Issues管理以下内容：

### 技能（Skills）
- 标签：`skill`
- 格式：JSON格式，包含技能名称、级别、描述和详细信息

### 项目（Projects）
- 标签：`project`

- 格式：JSON格式，包含项目名称、描述、技术栈和详细信息
- 支持多种分类：水域管理、林业巡护、农业植保等

### 新闻（News）
- 标签：`news`
- 格式：JSON格式，包含新闻标题、内容、日期和详细信息
- 支持多种分类：公司动态、行业资讯、技术前沿等

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
- 邮箱：contact@tcuav.com

## 📊 项目状态

![GitHub Stars](https://img.shields.io/github/stars/tysonye/tcuav.github.io?style=social)
![GitHub Forks](https://img.shields.io/github/forks/tysonye/tcuav.github.io?style=social)
![GitHub Issues](https://img.shields.io/github/issues/tysonye/tcuav.github.io)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/tysonye/tcuav.github.io)

---

**通程智能科技** - 专业的无人机技术与解决方案提供商
