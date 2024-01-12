# 李德龙的博客

语雀作为博客后台，elog生成语雀内容，nextjs进行服务端渲染，vercel部署

使用了以下技术和工具：
- [Tailwind CSS](https://tailwindcss.com/): 一个高度可定制的 CSS 框架，用于快速构建现代化的用户界面。
- [Next.js](https://nextjs.org/): 一个基于 React 的轻量级框架，用于构建静态和服务器渲染的应用程序。
- [Headless UI](https://headlessui.dev/): 一个可访问性优先的 UI 组件库，用于构建无样式的组件。
- [MDX](https://mdxjs.com/): 一种将 JSX 和 Markdown 结合的格式，用于编写可扩展的文档。
- [Vercel](https://vercel.com/): 一个用于部署和托管静态网站的云平台，提供了无缝的 Next.js 集成。
- [Elog](https://github.com/LetTTGACO/elog):Markdown 批量导出工具、开放式跨平台博客解决方案，随意组合写作平台。
- [语雀（Yuque）](https://www.yuque.com/): 一个优秀的知识创作与分享工具，用于撰写和管理博客的内容。

## 功能特性

- 使用 Tailwind CSS 构建美观、响应式的用户界面。
- 使用 Next.js 实现服务器渲染和静态生成，提供更好的性能和 SEO 优化。
- 使用 Headless UI 提供可访问性优先的无样式组件，确保博客的可访问性。
- 使用 MDX 编写可扩展的文档，可以轻松地在 Markdown 中嵌入 JSX 组件。
- 使用 Vercel 部署和托管博客，享受无缝的 Next.js 集成和自动化部署。
- 使用 Elog Markdown 批量导出工具、开放式跨平台博客解决方案，随意组合写作平台(语雀/Notion/FlowUs/飞书)和博客平台(Hexo/Vitepress/Halo/Confluence/WordPress等)。
- 使用语雀（Yuque）进行知识创作和分享，方便管理博客的内容和团队协作。

## 快速开始

1. 克隆仓库到本地：

   ```bash
   git clone https://github.com/your-username/your-blog.git
   ```

2. 安装依赖：

   ```bash
   cd your-blog
   pnpm install
   ```
3. 生成文章
   
   ```bash
   cp .env.excample .env
   ```
   填写对应的环境变量
   ```bash
   pnpm run sync:local
   ```
4. 在本地开发服务器上运行博客：

   ```bash
   pnpm run dev
   ```

   博客将在 http://localhost:3000 上运行。

## 部署

1. 在 Vercel 上创建一个新项目。

2. 将你的博客仓库与 Vercel 项目关联。

3. 配置 Vercel 项目的环境变量，即env内容。

4. 部署博客到 Vercel：

   ```bash
   pnpm run build
   ```

   构建完成后，博客将自动部署到 Vercel。

## 贡献

欢迎贡献你的想法、问题和改进！请提交 issue 或者发起 pull 请求。
