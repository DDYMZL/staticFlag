# 静态标识指令

该插件用于标识项目中存在的静态数据，便于管理人员后续对数据进行对接或优化。

## 安装

```bash
npm i staticFlag -D

or

yarn add staticFlag -D
```

## 注册：vue3 和 vue2 的引入注册方式大同小异

```js
// vue3
import staticflag from "staticflag";

app.directive("staticflag", staticflag);
```

```js
// vue2
import staticflag from "staticflag";

Vue.directive("staticflag", staticflag);
```

## 快速使用

- 使用参数 v-staticflag="{ ... }"，参数配置

| 名称           | 说明                                                                             | 类型    | 默认值       | 可选值                                                                                                                      |
| :------------- | :------------------------------------------------------------------------------- | :------ | :----------- | :-------------------------------------------------------------------------------------------------------------------------- |
| 位置           | 静态标识基于绑定元素的显示位置                                                   | string  | right-bottom | left-top / left-center / left-bottom / top-center / bottom-center / center-center / right-top / right-center / right-bottom |
| 需要更改的样式 | 参考 [cssText](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSRule/cssText) | string  | -            | -                                                                                                                           |
| 是否显示       | 控制静态标识的显示                                                               | boolean | false        | -                                                                                                                           |
