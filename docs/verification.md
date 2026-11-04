# 首版验证 · 2026-11-04

- 导航数据对照 LOC-1208 附件 source-manifest.json，7 个主题、72 个推荐项、49 个原文 URL，72 个 ID 唯一；59 个未匹配条目保持空 URL。
- 独立检查归档 HTML，72 个推荐标题均存在于原文文本中。未公开归档全文及完整 manifest 的知识说明。
- Node v24.14.1，React 19.3.1，Vite 8.3.5；npm lockfile 锁定全部依赖。安装审计 0 vulnerabilities。
- TypeScript 检查与生产构建通过。Vite 子路径 /ai-infra-guide/ 配合 hash 路由，生产预览下直接访问和刷新通过。
- Playwright 实际浏览器 3 组测试通过：搜索/筛选/空态；本地进度持久化/导出/有效导入/无效导入保护；390px 手机宽度/折叠菜单/hash 刷新/49 个参考链接。桌面、手机截图在任务评论附件交付。
- 抽查 Illustrated Transformer、NCCL 文档、Attention 论文：HTTP 200，详见 link-spotcheck.json。只证明本次请求可达，不改变全库未逐一核验的提示。

本地结果不代表 GitHub Actions 或线上部署成功，实际发布状态以任务交付评论和 GitHub Pages 为准。
