# React  Blog





前端：

  - 使用 [react-redux](https://github.com/reactjs/react-redux) 处理数据的渲染和单向流动
  - 使用 [redux-thunk](https://github.com/troch/react-thunk) 和 [redux-action-tools](https://github.com/kpaxqin/redux-action-tools) 处理异步 action
  - 使用 [material-ui-next](https://github.com/mui-org/material-ui) 组件库和 [material-ui-icons](https://github.com/MODX-Club/material-ui-icons) 图标库实现全站的 Material Design 风格
  - 使用 [fingerprint.js](https://github.com/Valve/fingerprintjs2) 作为客户端的访客身份标识
  - 使用 [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) 实现展示文章时的代码高亮
  - 使用 [marked](https://github.com/markedjs/marked) 渲染文章的 Markdown 内容为 HTML
  - 使用 [axios](https://github.com/axios/axios) 处理客户端 HTTP 请求
  - 使用 [node-sass-chokidar](https://github.com/michaelwayman/node-sass-chokidar) 转译 SCSS 为 CSS

后端：


  - 使用 [mongodb](https://www.mongodb.com/) 存取数据
  - 使用 [mongoose](http://mongoosejs.com/) 简化对 MongoDB 的操作
  - 使用 [shortid](https://github.com/dylang/shortid) 生成文档的 _id

> 请注意 [material-ui-next](https://github.com/mui-org/material-ui) 组件库的 api 尚不稳定，建议不要安装高于当前 package.json 中的版本。

#### 调试：

  1. 克隆 [react-blog-web](https://github.com/wanglijuncode/react-blog-web) 和 [react-blog](https://github.com/wanglijuncode/react-blog)

  2. 安装 mongodb

  3. 进入 react-blog-web 项目

  ```bash
  npm i
  npm run scss
  npm run dev
  ```

  4. 进入 react-blog 项目

  ```bash
  npm i
  npm run dev
  ```

  5. 在 `localhost:3000` 查看。



