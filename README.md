# Infra Atlas · AI Infra 学习导航

基于草帽路飞 / AI Infra Guide 的[《AI Infra学习路线》](https://mp.weixin.qq.com/s/oxUBDTd-b1aZnh0jGR5tqw)构建的中文静态导航。只发布资料目录及来源，不转载知识正文、不收集个人笔记。

访问： https://zhibinf.github.io/ai-infra-guide/

## 本地运行

Node.js 24；使用已提交的 package-lock.json 锁定依赖。

```sh
npm ci
npm run dev
npm run build
npm run preview
```

预览访问终端 URL 下的 `/ai-infra-guide/`。React + TypeScript + Vite，无后端、数据库或外部字体。遵循 [React 构建说明](https://react.dev/learn/build-a-react-app-from-scratch)及 [Vite Pages 部署说明](https://vite.dev/guide/static-deploy.html)。`base` 固定为 `/ai-infra-guide/`；hash 路由支持直接访问和刷新。

## 添加与修订资料

公开数据唯一入口 `src/data.json`。数据来自 LOC-1208 的 2026-11-04 已核验正文提取结果；正文 TXT、HTML 及完整提取包只保存在任务附件，未提交本仓库。

- `categories`：7 个原文主题及子章节，保留原顺序、标题与 ID；不公开目录自身作为第八个主题。
- `resources`：72 条推荐表格行，`id` 是稳定进度键；已有 ID 不重排、不复用。新增条目使用未使用过的新 ID。
- 必填 `category_id`、`subsection`、`title_original`、`type_original`、`source_url`、`source_locator`；定位格式沿用 `table[n]/row[n]`。
- `urls`：确认与该条目对应的原始 URL 数组。不能确定时保留空数组，`verification_status` 为 `destination_not_matched`，界面显示待核对。
- `url_present_in_source_not_fetched`：仅确认 URL 出现在原文且名称精确匹配，不宣称可用。当前 13 条对应、59 条待核对；修改时同步关于页面统计文案。
- `links`：49 条独立原文参考链接，可保留并列的同名推荐项，不以名称相似为由自动合并。保留 `text`、`url`、`category_id`、`subsection`、`kind`。
- 更新 `updated` 日期，运行构建及测试，发起 PR。不得加入个人进度导出文件、笔记、源文章全文或凭据。

## 个人进度与迁移

`localStorage` 键 `infra-atlas-progress-v1`，状态 `not_started / learning / done`。仅浏览器本地保存，无自动跨设备同步。在「我的进度」导出 JSON，另一电脑导入。导入会完整替换现有记录，建议先备份；无效版本、未知资料 ID、无效状态或大于 1 MiB 文件会被拒绝，不覆盖现有数据。

格式：`{"version":1,"progress":{"r1":"learning"}}`。清理浏览器会丢失本地状态；存储不可用时界面提示导出。

## 验证和发布

```sh
npx playwright install chromium
npm test
```

CI 使用 Playwright Chromium；本机默认使用 `/Applications/Google Chrome.app`，其他环境可在配置中改为安装的 Chromium。测试实际覆盖标题搜索、主题和进度筛选、空态、缺失链接、刷新持久化、导入导出及无效导入保护、手机菜单和宽度、hash 刷新和参考链接数。截图输出 `test-results/`，不提交个人状态。

当前使用 `gh-pages` 分支发布已在本地构建验证的静态产物。凭据缺少 workflow scope，不能上传 Actions 文件。恢复自动发布时，将 `docs/pages-workflow.yml` 复制到 `.github/workflows/pages.yml` 并使用具有 workflow 权限的凭据推送，然后将 Settings → Pages Source 改为 GitHub Actions。模板会在 PR 上构建测试，main 上发布。

当前手动发布：运行构建和测试后，将 dist 内容提交至 gh-pages 分支根目录（包含 .nojekyll），再推送该分支。不要将个人状态放入产物。

外链可用性未逐一验证；原文链接可能迁移或需要目标站点登录。内容版权归原作者，本项目未添加开源许可以转授第三方内容权利。
