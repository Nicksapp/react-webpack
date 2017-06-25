# React with Webpack 初始化已配置项目

> React with Webpack 基本配置完毕的初始化项目，已包含必备 webpack 插件  ，会保持项目跟随模块版本更新。<br> - 初次运行时间 2017年6月24日

## 任务步骤记录

* 初始化React项目，`npm install` 安装依赖
* 已安装 redux, react-redux
* 配置 Webpack , Webpack dev server

  webpack dev server 服务启动 `npm run dev`

  默认的 react-script 服务启动 `npm start`

  **webpack插件包括**
    * url-loader -> 解析 `*.jpg/png/svg/gif`
    * jsx-loader
    * babel-core -> babel 核心包
    * babel-loader
    * babel-preset-es2015 -> 解析 ES6
    * babel-preset-react -> 解析 jsx
    * style-loader -> 解析 `*.css`
    * css-loader -> 解析 `*.css`
---
    > HMR是一个webpack插件，它让你能浏览器中实时观察模块修改后的效果，但是如果你想让它工作，需要对模块进行额外的配额<br>
    > Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作

    * react-transform-hmr
    * babel-plugin-react-transform
---
  > 注：我们把 bebel 的配置选项放在单独名为 `.babelrc` 的配置文件中。

  **使用 Source Map**

  开发总是离不开调试，如果可以更加方便的调试当然就能提高开发效率，不过打包后的文件有时候你是不容易找到出错了的地方对应的源代码的位置的，Source Maps就是来帮我们解决这个问题的。

  通过简单的配置后，Webpack在打包时可以为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。

  > 最终应用 eval-source-map <br>
  > 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。不过在开发阶段这是一个非常好的选项，但是在生产阶段一定不要用这个选项

