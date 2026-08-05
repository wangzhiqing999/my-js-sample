# 拆分 AppMenu.vue 组件

## Summary

将 `Home.vue` 与 `OptionApi.vue` 中重复的顶部 `<Menu>` 定义抽离为独立的 `AppMenu.vue` 组件,使两个页面文件只保留各自页面内容(Alert/Input/Dropdown)。

## Current State Analysis

### 重复代码位置
- [src/views/Home.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/Home.vue#L2-L11) 第 2-11 行:`<Menu mode="horizontal">` 块
- [src/views/OptionApi.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/OptionApi.vue#L2-L11) 第 2-11 行:与 Home.vue 完全相同的 `<Menu>` 块

实际上两个文件的整个 `<template>` 完全一致,唯一区别是 `<script>` 风格:
- `Home.vue` 使用 `<script setup>`(Composition API)
- `OptionApi.vue` 使用 Options API(`export default { data() ... }`)

### 依赖与注册情况
- [src/main.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/main.js#L5-L13) 中通过 `app.use(ViewUiPlus)` 全局注册了 view-ui-plus 的所有组件,因此 `Menu` / `MenuItem` / `Icon` 等组件全局可用,**无需在子组件中显式 import**。
- `Home.vue` 第 39 行的 `import { Menu } from 'view-ui-plus'` 实际上是冗余的(全局已注册),拆分后应一并清理。
- 路由配置见 [src/router/routes.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/router/routes.js),`Menu` 的 `MenuItem` 使用 `to="/"` 与 `to="/option-api"` 配合 vue-router 实现跳转与高亮,不需要额外传 `active-name`。

### 目录结构
当前 `src/` 下不存在 `components` 目录,需新建。

## Proposed Changes

### 1. 新建 `src/components/AppMenu.vue`
存放抽离出的顶部菜单。使用 `<script setup>` 风格(与项目现代写法一致,且 `Home.vue` 已采用该风格)。

**内容:**
- `<template>`:原 `<Menu mode="horizontal">...</Menu>` 块(含两个 `MenuItem`:SetUp API → `/`,Option API → `/option-api`)
- `<script setup>`:仅 `defineOptions({ name: 'AppMenu' })`,不显式 import view-ui-plus 组件(全局已注册)
- 无需 props:菜单为静态内容,无外部参数依赖

### 2. 修改 `src/views/Home.vue`
- 在 `<script setup>` 中 `import AppMenu from '@/components/AppMenu.vue'`
- 模板第 2-11 行的 `<Menu>...</Menu>` 替换为 `<AppMenu />`
- 删除冗余的 `import { Menu } from 'view-ui-plus'`(原第 39 行)
- 保留页面自身内容:Alert/Input 块、Dropdown 块
- 保留 `defineOptions({ name: 'Home' })` 与 `msg` ref

### 3. 修改 `src/views/OptionApi.vue`
- 在 `<script>` 的 `export default` 中增加 `components: { AppMenu }`,并 `import AppMenu from '@/components/AppMenu.vue'`(沿用该文件原有的 Options API 写法,不切换风格)
- 模板第 2-11 行的 `<Menu>...</Menu>` 替换为 `<AppMenu />`
- 保留页面自身内容:Alert/Input 块、Dropdown 块
- 保留原有 `data()` 返回的 `msg`

## Assumptions & Decisions

1. **AppMenu.vue 位置**:放于 `src/components/AppMenu.vue`。理由:项目暂无 `components` 目录,该路径是 Vue 项目通用约定,且与 `views` 目录平级便于复用。
2. **不传 props**:菜单内容当前固定(只有 2 个菜单项且写死),没有动态化需求,保持简单。后续如需动态化可再加 `props.items`。
3. **不显式 import view-ui-plus 组件**:`main.js` 已全局注册,保持与项目约定一致。同时清理 `Home.vue` 中冗余的 `Menu` import。
4. **保留原 script 风格**:`OptionApi.vue` 继续用 Options API,不强行改为 `<script setup>`,本次任务只做菜单拆分,不做风格迁移。
5. **不修改路由**:Menu 使用 `to` 属性走 vue-router,行为不变。
6. **页面自身内容边界**:Alert/Input 与 Dropdown 块属于各页面自身展示内容,保留在页面文件中,不随 Menu 一起抽离。

## Verification Steps

1. 运行 `npm run dev` 启动开发服务器,确认无编译错误。
2. 访问 `/`:页面顶部显示横向菜单,菜单项 "SetUp API" 高亮;下方显示 Alert/Input 与 Dropdown。
3. 访问 `/option-api`:菜单项 "Option API" 高亮;页面其余内容与原一致。
4. 点击菜单项可在两个路由间正常切换,且高亮状态跟随路由变化。
5. 控制台无 vue 组件注册相关警告。
