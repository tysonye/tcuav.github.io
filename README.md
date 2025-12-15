# tcuav.github.io

# 项目快速指导

简短目标：这是一个使用 Jekyll 的静态博客站点，托管在 GitHub Pages（有 `CNAME`）。请按下文约定编写或修改内容、布局与资源。

- **大局（为什么这样组织）**：这是一个轻量的 Jekyll 站点，主题由 `_config.yml` 中的 `theme: jekyll-theme-slate` 指定。内容主要在 `_posts/`（时间驱动文章）和顶层 Markdown 页面（`index.md`, `about.md`）。布局与可复用片段在 `_layouts/` 与 `_includes/`。

- **关键文件/目录**:
  - `[_config.yml]( _config.yml#L1-L40 )`：站点配置（主题、markdown 引擎、`permalink` 等）。
  - `[_posts/]( _posts/ )`：文章按 `YYYY-MM-DD-title.md` 命名，例如 `[2025-12-15-hello-word.md]( _posts/2025-12-15-hello-word.md )`。
  - `[_layouts/]( _layouts/ )` 和 `[_includes/]( _includes/ )`：页面骨架与可复用片段。
  - `[assets/]( assets/ )`：静态资源（图片位于 `assets/images/`）。
  - `[CNAME]( CNAME )`：表明已配置自定义域名，部署需保留。

- **可观察的约定与模式（在此仓库中）**:
  - 文章使用 Jekyll front-matter（YAML）驱动元数据，文件名决定发布日期与永久链接。
  - `_config.yml` 设置了 `permalink: /:year/:month/:day/:title/`，修改文章或 slug 时要保持 URL 一致性。
  - 站点内容以中文为主（见 `title`、`description`），处理文本时注意保留现有语言/编码风格。
  - `timezone: America/New_York` 与中文内容的不一致可能是故意设置或历史遗留，改动前请核实会否影响发布日期显示。

- **本地开发与部署（可执行命令）**:
  - 本地预览（常见流程）：
    - `gem install jekyll bundler`（若未安装）
    - `bundle install`（若添加 Gemfile）
    - `bundle exec jekyll serve --livereload` 或 `jekyll serve`（在仓库根目录运行）
  - 构建静态文件：`bundle exec jekyll build`（输出 `_site/`）。
  - 注意：GitHub Pages 会在 push 时自动构建，保留 `CNAME` 与 `_config.yml` 中重要设置以避免部署差异。

- **修改指南（针对 AI 助手的具体行为）**:
  - 编辑文章：在 `_posts/` 新建或修改 `YYYY-MM-DD-title.md`，确保 YAML front-matter 包含 `title`、`date`（ISO 8601）等常用字段。
  - 修改布局/包含：更改 `_layouts/` 或 `_includes/` 时，检查使用该片段的页面（例如 `index.md` 或 posts），避免破坏现有样式。
  - 静态资源：把图片放在 `assets/images/` 并在 Markdown 中使用相对路径 `assets/images/xxx.jpg`。

- **示例片段（来自仓库）**:
  - 文章示例：`_posts/2025-12-15-hello-word.md`（遵循 `YYYY-MM-DD-title.md` 命名）。
  - 配置示例：`_config.yml` 中的 `permalink` 与 `theme` 是关键影响项。

- **不要假设 / 注意事项**:
  - 仓库未包含 `Gemfile`、CI 配置或自定义构建脚本；若需要引入插件或更复杂构建，请先与维护者确认并提交 `Gemfile`。
  - 在修改 `CNAME`、`_config.yml`（尤其 `permalink`、`baseurl`）之前，应明确是否影响生产站点路由或自定义域名。

如需我合并现有文档或更细化的开发流程（例如添加 `Gemfile`、CI 流程或本地自动化脚本），请告知优先级与许可，我会据此调整并更新本文档。