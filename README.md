<p align="right">
  <a href="./README.md"><kbd>中文</kbd></a>
  <a href="./README.en.md"><kbd>English</kbd></a>
</p>

# Iris Frontend

这是 Iris AI Companion 的公开 Web 前端仓库。

公开访问地址：

```text
https://zhiyu-ning.github.io/iris
```

这个仓库只包含静态前端资源：

- HTML / CSS / JavaScript
- PWA manifest 和 service worker
- Iris 品牌图标
- 五套公开前端主题：极简白、素雅灰、经典蓝、极致黑、流光玻璃
- 参考稿一致的底部输入栏布局：干净的 `+` 文件上传按钮、输入胶囊、内嵌麦克风、独立发送按钮
- 平面化设置导航行：闭合栏目不再渲染额外玻璃底板，只保留文字、图标、箭头和展开内容
- PC 桌面适配：更宽的对话阅读区、对齐的底部输入栏、右侧设置 inspector 面板和独立滚动的设置列表
- 公开运行配置 `public-config.js`

它不包含，也不应该包含：

- API Key 或模型密钥
- 服务器密码
- 私人 Prompt
- 聊天历史
- 长期记忆
- PDF / 文件内容
- 数据库或运行日志
- Jarvis/Iris Backend 源码

当前后端入口：

```text
https://jarvis-alpha.tail36770b.ts.net
```

浏览器会从这个后端调用 `/client/v1/*`、`/voice/tts` 和 `/voice/ws`。用户手动输入访问密钥，前端只把密钥发送给私有后端 `/voice/session-token` 换取短期 Iris session token；浏览器只在当前会话保存短期 token，不写入仓库。长期访问密钥首选配置为私有后端 `.env` 里的 `IRIS_ACCESS_KEY`，旧 `JARVIS_API_TOKEN` 仅作兼容，不能写进 Pages 仓库或前端源码。

本仓库由主项目构建生成，不在这里维护后端逻辑。
