Vue CLI 3 基本操作.

参考网页：
https://my.oschina.net/wangnian/blog/2051369



## 安装操作.

### 1.  先查询是否有旧版本， 如果有， 先删除.
运行
vue -V
查看当前安装的 vue 版本.

如果有 老版本的话，运行
npm uninstall vue-cli -g



### 2. 检查 Node.js 版本.
运行
node -v
查看当前安装的 nodeJs 版本.
Vue CLI 3需要 nodeJs ≥ 8.9 (官方推荐 8.11.0+)
需要升级的情况下， 可到 http://nodejs.cn/download/ 下载.



### 3. 安装.
运行
cnpm install -g @vue/cli
安装完成后，运行
vue -V
查看当前安装的 vue 版本.




## 使用

### 1. vue create 搭建新项目
运行
vue create vuetest
首先，选择一个 preset（预设）
这里是最简单的测试使用， 就简单回车
然后，包管理的地方，选择 Use NPM，回车

等待完成...

运行
cd vuetest
npm run serve

打开浏览器，观察运行结果.


### 2. vue ui 图形化界面创建项目
运行
vue ui
程序运行，然后会自动打浏览器页面。

在 Vue 项目管理器 下， 点击 【创建】
然后，确认好目录后，点击【在此创建新项目】

【详情】
项目文件夹，输入 vuetest-ui
包管理器选择 npm
取消 初始化 git 仓库.
点击【下一步】

【预设】
简单选择【默认】
点击【创建项目】

等待完成...

【插件】将显示 已安装的插件， 并可以根据需要，添加 vue-router，vuex


