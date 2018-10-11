"use strict"



// 测试服务.
var myTestService = {

	// 是否显示运行日志.
    isShowRunningLog: true,


	// 测试函数1.
	testFunc1: function() {
		if(this.isShowRunningLog) {
			console.log("testFunc1 Start.");
		}

		// 这里预期是一个 ajax 的请求处理.
		// 然后写好默认的 显示处理结果的代码.
		// 普通的页面，使用 默认的显示处理结果的代码， 就可以了。
		// 特殊的页面，可以通过修改  显示处理结果的那个方法， 来做额外的处理.

		// 显示处理结果.
		this.showTestFunc1Result(Math.random());


		if(this.isShowRunningLog) {
			console.log("testFunc1 Finish.");
		}
	},


	// 显示测试函数1 的处理结果.
	showTestFunc1Result: function(data) {
		if(this.isShowRunningLog) {
			console.log("showTestFunc1Result: Result = ", data);
		}
	}

}