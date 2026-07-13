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

浏览器会从这个后端调用 `/client/v1/*`、`/voice/tts` 和 `/voice/ws`。用户通过 GitHub OAuth 登录；私有后端校验 `IRIS_GITHUB_ALLOWED_USERS` 后签发短期 Iris session token，浏览器只在当前会话保存该 token，不写入仓库。

本仓库由主项目构建生成，不在这里维护后端逻辑。
