
// ES6 新增了let命令，用来声明变量。
// 它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。




function testVar() {
	console.log("Test var.");

	var a = [];
	for (var i = 0; i < 10; i++) {
	  a[i] = function () {
		console.log(i);
	  };
	}
	a[6](); // 10
}


// 使用let，声明的变量仅在块级作用域内有效
function testLet() {
	console.log("Test let.");

	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
		console.log(i);
	  };
	}
	a[6](); // 6
}


testVar();
testLet();