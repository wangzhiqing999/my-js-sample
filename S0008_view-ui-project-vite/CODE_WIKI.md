# view-ui-project-vite — Code Wiki

## 一、项目概述

**view-ui-project-vite** 是一个基于 Vue 3 + Vite 的前端模板项目，集成 View UI Plus 组件库，使用 Pinia 进行状态管理，Vue Router 进行路由控制。该项目旨在为开发者提供一个开箱即用的 Vue 3 项目脚手架，同时展示 Composition API（Setup 语法）和 Options API 两种代码风格。

| 属性 | 值 |
|------|-----|
| 项目名称 | view-ui-project-vite |
| 版本 | 1.0.0 |
| 框架 | Vue 3 (^3.4.0) |
| 构建工具 | Vite 6 (^6.0.0) |
| UI 组件库 | View UI Plus (^1.3.1) |
| 状态管理 | Pinia (^3.0.3) |
| 路由 | Vue Router 4 (^4.2.0) |
| 包管理器 | npm |

---

## 二、项目目录结构

```
view-ui-project-vite/
├── public/                          # 静态资源目录（构建时直接复制）
│   ├── favicon.ico                  # 网站图标
│   └── logo.png                     # 网站 Logo
│
├── src/                             # 源代码目录
│   ├── main.js                      # 应用入口文件
│   ├── App.vue                      # 根组件（仅包含 <router-view />）
│   │
│   ├── router/                      # 路由模块
│   │   ├── index.js                 # 路由实例创建与配置
│   │   └── routes.js                # 路由规则定义（懒加载）
│   │
│   ├── views/                       # 页面视图组件
│   │   ├── Home.vue                 # 首页（Composition API / <script setup>）
│   │   └── OptionApi.vue            # Option API 演示页（Options API）
│   │
│   ├── stores/                      # Pinia 状态管理
│   │   ├── app.js                   # 应用级 Store（主题 theme）
│   │   └── user.js                  # 用户 Store（用户信息 user）
│   │
│   └── styles/                      # 全局样式
│       ├── index.less               # 样式入口（导入 View UI Plus 样式）
│       └── variable.less            # 样式变量定义（预备）
│
├── dist/                            # 构建输出目录
│
├── index.html                       # HTML 模版入口
├── package.json                     # 项目依赖与脚本
├── vite.config.mjs                  # Vite 构建配置
├── README.md                        # 项目说明文档
├── STEP.txt                         # 搭建步骤参考
├── .gitignore                       # Git 忽略规则
├── .env                             # 通用环境变量
├── .env.development                 # 开发环境变量
├── .env.staging                     # 预发布环境变量
└── .env.production                  # 生产环境变量
```

---

## 三、模块职责说明

### 3.1 入口层

#### 3.1.1 `index.html` — HTML 入口

位于项目根目录，是 Vite 构建的入口 HTML 文件。使用 `<%- APP_TITLE %>` EJS 语法占位，在构建时由 `vite-plugin-html` 插件动态注入页面标题。`<div id="app"></div>` 是 Vue 应用的挂载容器。

#### 3.1.2 `src/main.js` — 应用入口

[src/main.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/main.js) — 负责初始化 Vue 应用实例，依次注册核心插件：

| 插件 | 用途 |
|------|------|
| `createPinia()` | 创建 Pinia 状态管理实例 |
| `router` | 注册 Vue Router 路由系统 |
| `ViewUiPlus` | 注册 View UI Plus 组件库 |

同时导入全局样式文件 `./styles/index.less`，最后挂载到 `#app` DOM 节点。

#### 3.1.3 `src/App.vue` — 根组件

[src/App.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/App.vue) — 最简单的根组件，仅包含 `<router-view />`，作为路由视图的出口。使用 `<script setup>` 语法和 `defineOptions({ name: 'App' })` 声明组件名。

---

### 3.2 路由模块 (`src/router/`)

#### 3.2.1 `src/router/index.js` — 路由实例

[src/router/index.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/router/index.js) — 创建路由器实例：

- 使用 `createRouter()` 创建路由
- 采用 **HTML5 History 模式**（`createWebHistory()`），URL 中不包含 `#` 号
- 配置 `scrollBehavior` 使页面切换时滚动条回到顶部
- 注释了一段关于 `createWebHashHistory` 的兼容代码（暂未启用）

#### 3.2.2 `src/router/routes.js` — 路由规则

[src/router/routes.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/router/routes.js) — 定义了两条路由规则：

| 路径 | 名称 | 组件 | 元信息 | 加载方式 |
|------|------|------|--------|----------|
| `/` | Home | `@/views/Home.vue` | `{ title: '首页' }` | 懒加载 |
| `/option-api` | OptionApi | `@/views/OptionApi.vue` | `{ title: 'Option API' }` | 懒加载 |

所有路由组件均使用动态 `import()` 实现懒加载，减小首屏包体积。

---

### 3.3 视图层 (`src/views/`)

#### 3.3.1 `src/views/Home.vue` — 首页（Composition API）

[src/views/Home.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/Home.vue) — 采用 Vue 3 `<script setup>` 语法（Composition API），演示了：

- **水平导航菜单**：使用 View UI Plus 的 `<Menu>` 组件，包含两个导航项
- **响应式数据**：使用 `ref()` 创建响应式变量 `msg`
- **双向绑定**：`<Input v-model="msg" />` 实现输入框与数据绑定
- **Alert 提示**：带图标的 Alert 组件展示当前消息
- **Dropdown 下拉菜单**：展示 View UI Plus 的下拉菜单功能，包含禁用项和分隔项

UI 组件引用方式：`import { Menu } from 'view-ui-plus'`（按需导入）。

#### 3.3.2 `src/views/OptionApi.vue` — Option API 演示页

[src/views/OptionApi.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/OptionApi.vue) — 采用 Vue 2 风格的 Options API（`export default { data() {...} }`），展示了与 Home.vue 完全相同的 UI 功能，但使用不同的代码风格。模板结构与 Home.vue 一致，包括：

- 水平导航菜单
- Alert 消息展示
- Input 双向绑定
- Dropdown 下拉菜单

此页面存在的意义：**对比展示 Composition API（`<script setup>`）与 Options API 两种代码风格**。

---

### 3.4 状态管理 (`src/stores/`)

#### 3.4.1 `src/stores/app.js` — 应用 Store

[src/stores/app.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/stores/app.js) — 使用 Pinia 的 `defineStore` 定义应用级状态：

| 状态 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `theme` | `ref` | `'light'` | 应用主题模式 |

采用 Setup Store 语法（基于 Composition API 函数）。

#### 3.4.2 `src/stores/user.js` — 用户 Store

[src/stores/user.js](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/stores/user.js) — 使用 Pinia 的 `defineStore` 定义用户状态：

| 状态 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `user` | `ref` | `null` | 当前登录用户信息 |

同样采用 Setup Store 语法，预留了 `computed` 的导入，为后续添加计算属性做准备。

---

### 3.5 样式模块 (`src/styles/`)

#### 3.5.1 `src/styles/index.less` — 全局样式入口

[src/styles/index.less](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/styles/index.less) — 导入 View UI Plus 的完整 Less 样式源文件，使组件库的样式生效。注释掉了一行自定义主题色覆盖示例。

#### 3.5.2 `src/styles/variable.less` — 样式变量

[src/styles/variable.less](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/styles/variable.less) — 当前为空文件，预留用于定义全局 Less 变量。在 `vite.config.mjs` 中已配置自动导入此文件到所有 Less 文件中（通过 `additionalData`）。

---

## 四、关键配置详解

### 4.1 Vite 配置 (`vite.config.mjs`)

[vite.config.mjs](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/vite.config.mjs) — 完整的 Vite 构建配置，采用函数式导出（根据 `mode` 动态配置）：

| 配置项 | 说明 |
|--------|------|
| **插件** | `@vitejs/plugin-vue`（Vue SFC 编译）、`@vitejs/plugin-vue-jsx`（JSX/TSX 支持）、`vite-plugin-html`（HTML 模板注入，用于动态标题） |
| **路径别名** | `@/` → `src/` 目录；`~` → 空字符串（用于 View UI Plus 的字体路径解析） |
| **解析扩展名** | `.js`, `.jsx`, `.mjs`, `.vue`, `.json`, `.less`, `.css` |
| **构建目标** | `esnext`（现代浏览器） |
| **输出目录** | `dist/` |
| **资源目录** | `assets/` |
| **资源内联阈值** | 8KB 以下文件内联为 base64 |
| **Sourcemap** | 仅开发环境开启 |
| **代码分割** | 输出到 `js/` 目录，带 hash 文件名 |
| **CSS 预处理** | Less 支持，开启 `javascriptEnabled`，自动导入 `variable.less` |
| **PostCSS** | 使用 `autoprefixer` 自动添加 CSS 浏览器前缀 |
| **环境变量前缀** | `APP_`（只有以 `APP_` 开头的变量会暴露给客户端） |
| **开发服务器** | 自动打开浏览器 |
| **预览服务器** | 端口 5000 |
| **预构建优化** | 预打包 `view-ui-plus` 以加速开发启动 |

### 4.2 环境变量配置

项目支持多环境配置，文件优先级：`.env.*`（特定模式）> `.env`（通用）。

| 文件 | 对应模式 | 变量 |
|------|----------|------|
| `.env` | 所有模式 | `APP_TITLE=View UI Plus Demo` |
| `.env.development` | `development`（默认） | `APP_FLAG=dev` |
| `.env.staging` | `staging` | `APP_FLAG=staging` |
| `.env.production` | `production` | `APP_FLAG=prod` |

通过 `--mode` 参数切换模式，例如 `vite build --mode=staging`。

---

## 五、依赖关系图谱

```
index.html
    └── src/main.js
            ├── createApp() → App.vue → <router-view />
            ├── createPinia()
            │       ├── src/stores/app.js    (useAppStore)
            │       └── src/stores/user.js   (useUserStore)
            ├── router
            │       ├── src/router/index.js
            │       └── src/router/routes.js
            │               ├── src/views/Home.vue
            │               │       ├── view-ui-plus (Menu, MenuItem, Icon, Alert, Input, Dropdown, etc.)
            │               │       └── vue (ref)
            │               └── src/views/OptionApi.vue
            │                       └── view-ui-plus (Menu, MenuItem, Icon, Alert, Input, Dropdown, etc.)
            ├── ViewUiPlus (全局组件库注册)
            └── src/styles/index.less
                    └── view-ui-plus/src/styles/index.less
```

### 核心依赖说明

#### 运行时依赖（dependencies）

| 包名 | 版本 | 用途 |
|------|------|------|
| `vue` | ^3.4.0 | 前端框架核心 |
| `vue-router` | ^4.2.0 | 官方路由管理器 |
| `pinia` | ^3.0.3 | 状态管理库（Vuex 的替代） |
| `view-ui-plus` | ^1.3.1 | 基于 iView 的 Vue 3 UI 组件库 |

#### 开发依赖（devDependencies）

| 包名 | 版本 | 用途 |
|------|------|------|
| `vite` | ^6.0.0 | 构建工具和开发服务器 |
| `@vitejs/plugin-vue` | ^5.0.0 | Vite 的 Vue SFC 编译插件 |
| `@vitejs/plugin-vue-jsx` | ^4.2.0 | Vite 的 Vue JSX 编译插件 |
| `less` | ^4.2.0 | Less CSS 预处理器 |
| `autoprefixer` | ^10.4.16 | PostCSS 自动添加浏览器前缀 |
| `vite-plugin-html` | ^3.2.2 | Vite HTML 模板注入插件 |

---

## 六、项目运行方式

### 6.1 安装依赖

```shell
npm install
```

### 6.2 开发模式

```shell
# 方式一：开发模式（默认 development）
npm run dev

# 方式二：预发布模式
npm run dev:staging

# 方式三：生产模式（开发预览）
npm run dev:prod
```

开发服务器特点：
- 默认自动打开浏览器
- 支持 HMR（热模块替换）
- 环境变量以 `APP_` 前缀暴露

### 6.3 生产构建

```shell
# 构建生产版本
npm run build

# 构建预发布版本
npm run build:staging
```

构建产物输出到 `dist/` 目录，包含：
- `dist/index.html` — 处理后的 HTML
- `dist/js/` — JavaScript 文件（带 hash）
- `dist/assets/` — CSS 和字体文件
- `dist/` — 根目录静态资源（public/ 中的文件）

### 6.4 预览构建产物

```shell
# 预览生产构建
npm run preview

# 预览预发布构建
npm run preview:staging
```

预览服务器运行在端口 5000。

### 6.5 可用脚本一览

| 命令 | 说明 |
|------|------|
| `npm run serve` | 等同于 `npm run dev` |
| `npm run dev` | 启动开发服务器（development 模式） |
| `npm run dev:staging` | 启动开发服务器（staging 模式） |
| `npm run dev:prod` | 启动开发服务器（production 模式） |
| `npm run build` | 生产构建 |
| `npm run build:staging` | 预发布构建 |
| `npm run preview` | 构建并预览生产版本 |
| `npm run preview:staging` | 构建并预览预发布版本 |

---

## 七、路由与页面导航

### 7.1 路由结构

```
/                  → Home.vue      (SetUp API 演示页)
/option-api        → OptionApi.vue (Option API 演示页)
```

### 7.2 导航方式

- 页面顶部水平导航菜单提供两个 Tab 切换
- 使用 `<MenuItem to="/">` 和 `<MenuItem to="/option-api">` 进行路由跳转
- 采用 HTML5 History 模式，URL 无 `#` 号

---

## 八、代码风格对比

项目特意设计了两个页面来对比 Vue 3 的两种代码风格：[Home.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/Home.vue)（Composition API / `<script setup>`）和 [OptionApi.vue](file:///d:/My-Github/my-js-sample/S0008_view-ui-project-vite/src/views/OptionApi.vue)（Options API）。两个页面实现完全相同的 UI 功能，但使用了完全不同的代码组织方式。

### 8.1 完整代码对比

#### Composition API — `Home.vue`

```vue
<template>
  <Menu mode="horizontal">
    <MenuItem name="SetUp API" to="/">
      <Icon type="ios-home" />
      SetUp API
    </MenuItem>
    <MenuItem name="OptionApi" to="/option-api">
      <Icon type="ios-cube" />
      Option API
    </MenuItem>
  </Menu>
  <div style="margin-top: 20px;">
      <Alert show-icon>{{ msg }}</Alert>
      <Input v-model="msg" />
  </div>
  <div style="margin-top: 20px;">
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <template #list>
            <DropdownMenu>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>
  </div>
</template>

<script setup>
defineOptions({ name: 'Home' })
import { Menu } from 'view-ui-plus'
import { ref } from 'vue'
const msg = ref('Hello View UI Plus!')
</script>
```

#### Options API — `OptionApi.vue`

```vue
<template>
  <Menu mode="horizontal">
    <MenuItem name="SetUp API" to="/">
      <Icon type="ios-home" />
      SetUp API
    </MenuItem>
    <MenuItem name="OptionApi" to="/option-api">
      <Icon type="ios-cube" />
      Option API
    </MenuItem>
  </Menu>
  <div style="margin-top: 20px;">
      <Alert show-icon>{{ msg }}</Alert>
      <Input v-model="msg" />
  </div>
  <div style="margin-top: 20px;">
    <Dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <template #list>
            <DropdownMenu>
                <DropdownItem>驴打滚</DropdownItem>
                <DropdownItem>炸酱面</DropdownItem>
                <DropdownItem disabled>豆汁儿</DropdownItem>
                <DropdownItem>冰糖葫芦</DropdownItem>
                <DropdownItem divided>北京烤鸭</DropdownItem>
            </DropdownMenu>
        </template>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: 'OptionApi',
  data() {
    return {
      msg: 'Hello View UI Plus!'
    }
  }
}
</script>
```

两个页面模板（`<template>`）完全一致，但 `<script>` 部分的代码组织方式截然不同。

### 8.2 逐维度差异详解

#### 维度一：组件声明方式

| 方面 | Composition API (`<script setup>`) | Options API |
|------|-----------------------------------|-------------|
| **组件名** | `defineOptions({ name: 'Home' })` | `export default { name: 'OptionApi' }` |
| **导出方式** | 无导出语句，顶层代码自动暴露给模板 | 使用 `export default {}` 导出组件选项对象 |
| **语法** | 声明式宏 `defineOptions` | 对象字面量属性 |

`<script setup>` 中不需要显式 `export default`，所有顶层变量和函数自动暴露给模板，这是最大的语法差异。

#### 维度二：响应式状态声明

| 方面 | Composition API (`<script setup>`) | Options API |
|------|-----------------------------------|-------------|
| **声明方式** | `import { ref } from 'vue'` + `const msg = ref(...)` | `data() { return { msg: ... } }` |
| **访问方式** | 直接使用 `msg`（自动解包） | 通过 `this.msg` 访问 |
| **响应式原理** | 显式调用 `ref()` / `reactive()` 包装 | `data()` 返回的对象自动变为响应式 |
| **类型推导** | 天然支持 TypeScript 类型推导 | 需要额外类型声明 |

**Composition API 示例：**
```javascript
import { ref, reactive, computed } from 'vue'

const msg = ref('Hello')           // 基本类型包装为 ref
const count = ref(0)               // 数字类型
const user = reactive({ name: '张三', age: 25 })  // 对象使用 reactive
const doubled = computed(() => count.value * 2)   // 计算属性
```

**Options API 示例：**
```javascript
export default {
  data() {
    return {
      msg: 'Hello',
      count: 0,
      user: { name: '张三', age: 25 }
    }
  },
  computed: {
    doubled() {
      return this.count * 2
    }
  }
}
```

#### 维度三：组件导入方式

| 方面 | Composition API (`<script setup>`) | Options API |
|------|-----------------------------------|-------------|
| **UI 组件导入** | `import { Menu } from 'view-ui-plus'`（按需导入） | 无需手动导入（全局注册后直接使用） |
| **其他组件** | 直接 `import` 后即可在模板中使用 | 需在 `components` 选项中注册 |
| **工具函数** | 在顶层 `import` 后直接使用 | 需在 `methods` 或 `computed` 中通过 `this` 调用 |

**Composition API 示例——导入子组件：**
```javascript
import ChildComp from './ChildComp.vue'
// 模板中可直接使用 <ChildComp />
```

**Options API 示例——导入子组件：**
```javascript
import ChildComp from './ChildComp.vue'
export default {
  components: { ChildComp }  // 必须注册
}
```

#### 维度四：方法定义

| 方面 | Composition API | Options API |
|------|----------------|-------------|
| **定义方式** | 顶层普通函数 | `methods` 选项内定义 |
| **访问状态** | 直接使用变量名 | 通过 `this.xxx` |
| **this 上下文** | 无 `this` 依赖 | 依赖 `this` 指向组件实例 |

**Composition API 示例：**
```javascript
const count = ref(0)

function increment() {
  count.value++    // ref 需要通过 .value 修改
}

function reset() {
  count.value = 0
}
```

**Options API 示例：**
```javascript
export default {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() {
      this.count++    // 直接通过 this 修改
    },
    reset() {
      this.count = 0
    }
  }
}
```

#### 维度五：生命周期钩子

| 生命周期 | Composition API | Options API |
|----------|----------------|-------------|
| 创建前 | — | `beforeCreate` |
| 创建后 | — | `created` |
| 挂载前 | — | `beforeMount` |
| 挂载后 | `onMounted(() => { ... })` | `mounted() { ... }` |
| 更新前 | `onBeforeUpdate(() => { ... })` | `beforeUpdate() { ... }` |
| 更新后 | `onUpdated(() => { ... })` | `updated() { ... }` |
| 卸载前 | `onBeforeUnmount(() => { ... })` | `beforeUnmount() { ... }` |
| 卸载后 | `onUnmounted(() => { ... })` | `unmounted() { ... }` |
| 错误捕获 | `onErrorCaptured(() => { ... })` | `errorCaptured() { ... }` |

**Composition API 示例：**
```javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
```

**Options API 示例：**
```javascript
export default {
  mounted() {
    console.log('组件已挂载')
  },
  unmounted() {
    console.log('组件已卸载')
  }
}
```

> 注意：Composition API 中 `beforeCreate` 和 `created` 没有对应的 hook 函数，因为 `<script setup>` 中的代码本身就等价于运行在 `created` 之前。

#### 维度六：侦听器（Watch）

**Composition API 示例：**
```javascript
import { watch, ref } from 'vue'

const msg = ref('Hello')

// 侦听单个数据源
watch(msg, (newVal, oldVal) => {
  console.log(`msg 从 ${oldVal} 变为 ${newVal}`)
})

// 侦听多个数据源
watch([msg, count], ([newMsg, newCount], [oldMsg, oldCount]) => {
  console.log('msg 或 count 发生了变化')
})

// 立即执行 + 深度侦听
watch(msg, handler, { immediate: true, deep: true })
```

**Options API 示例：**
```javascript
export default {
  data() {
    return { msg: 'Hello', count: 0 }
  },
  watch: {
    // 侦听单个属性
    msg(newVal, oldVal) {
      console.log(`msg 从 ${oldVal} 变为 ${newVal}`)
    },
    // 深度侦听
    user: {
      handler(newVal, oldVal) { ... },
      deep: true,
      immediate: true
    }
  }
}
```

### 8.3 核心差异总结

| 对比维度 | Composition API (`<script setup>`) | Options API |
|----------|-----------------------------------|-------------|
| **代码组织** | 按逻辑功能组织（关注点聚合） | 按选项类型组织（data / methods / computed 分块） |
| **逻辑复用** | 通过 Composable 函数轻松复用 | 通过 Mixins（存在命名冲突问题） |
| **TypeScript 支持** | 天然优秀，类型推导完善 | 需要额外类型声明，支持较弱 |
| **Tree-shaking** | 按需导入，打包体积更小 | 未使用的选项可能无法被 tree-shake |
| **代码量** | 更简洁，样板代码少 | 需要更多模板代码 |
| **学习曲线** | 需要理解响应式 API（ref / reactive） | 学习曲线平缓，Vue 2 用户可平滑过渡 |
| **this 依赖** | 不依赖 `this`，更安全 | 重度依赖 `this` 上下文 |
| **可维护性（大型项目）** | 逻辑可拆分到独立函数文件，易于维护 | 大型组件 options 块会变得臃肿 |
| **min.js 文件** | 额外导入 `ref`、`onMounted` 等（打包时 tree-shake 掉未使用的） | 无需额外导入 |

### 8.4 选择建议

| 场景 | 推荐风格 |
|------|---------|
| 新项目 / 新功能 | **Composition API** — 更现代、更灵活 |
| Vue 2 迁移项目 | 可混合使用，逐步迁移 |
| 小团队 / 个人项目 | Composition API 更高效 |
| 熟悉 Vue 2 的团队过渡期 | Options API 过渡，逐步引入 Composition API |
| 需要高度逻辑复用的场景 | Composition API（Composable 模式） |
| 简单组件（无复杂逻辑） | 两者均可，按团队习惯 |

## 九、常见问题与注意事项

1. **环境变量访问**：在代码中通过 `import.meta.env.APP_xxx` 访问，仅 `APP_` 前缀的变量会被暴露。
2. **路径别名**：使用 `@/` 指向 `src/` 目录，例如 `@/views/Home.vue`。
3. **View UI Plus 组件**：全局注册后可在任意组件中直接使用，无需重复导入。
4. **Less 变量**：`variable.less` 会自动导入到所有 Less 文件中，无需手动 `@import`。
5. **构建输出**：`dist/` 目录在每次构建前会被清空（`emptyOutDir: true`）。
6. **字体资源**：View UI Plus 的图标字体文件通过 `assetsInclude` 配置直接作为静态资源处理。