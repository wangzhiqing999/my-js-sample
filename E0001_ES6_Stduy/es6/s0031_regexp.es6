
// 字符串的正则方法
// 字符串对象共有4个方法，可以使用正则表达式：match()、replace()、search()和split()。

// ES6将这4个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。
// -String.prototype.match 调用 RegExp.prototype[Symbol.match]
// -String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
// -String.prototype.search 调用 RegExp.prototype[Symbol.search]
// -String.prototype.split 调用 RegExp.prototype[Symbol.split]


function testMatch() {
	// match  找到一个或多个正则表达式的匹配。
	console.log("----- test match ------");
	let str = "1 plus 2 equal 3";
	let result = str.match(/\d+/g);
	console.log("Match " + str + "， Result = ", result);
}


function testReplace() {
	// replace	替换与正则表达式匹配的子串。
	console.log("----- test replace ------");
	let str = '"a", "b", "c"';
	let result = str.replace(/"([^"]*)"/g,  "'$1'");
	console.log("Replace " + str + "， Result = ", result);
}


function testSearch() {
	// search	检索与正则表达式相匹配的值。
	console.log("----- test search ------");
	let str = "Test Search.";
	// 检索， 大小写敏感.
	let result1 = str.search(/search/);
	// 检索， 大小写不敏感.
	let result2 = str.search(/search/i);
	console.log("Search " + str + "， Result1，Result2 = ", result1, result2);
}


function testSplit() {
	// split	把字符串分割为字符串数组。
	console.log("----- test split ------");
	let str = 'a bc  def   ghi   test!';
	let result = str.split(/\s+/);
	console.log("Split " + str + "， Result = ", result);
}





// 修饰符的测试.
function testModifier() {
	console.log("----- test Modifier ------");

	let str = "Test Modifier_i, modifier_g, modifier_m.";

	console.log("--- i 大小写不敏感.")
	let result1 = str.search(/modifier/);
	let result2 = str.search(/modifier/i);
	console.log("Search " + str + "， Result1，Result2 = ", result1, result2);

	console.log("--- g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）.")
	result1 = str.match(/modifier/);
	result2 = str.match(/modifier/g);
	console.log("match " + str + "， Result = ", result1);
	console.log("match " + str + "， with g Result = ", result2);



	console.log("--- u Unicode模式.")
	// 如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配61个连续的u。
	let reg1 = /\u{61}/;
	let reg2 = /\u{61}/u;
	result1 = reg1.test("a");
	result2 = reg2.test("a");
	console.log("test Result = ", reg1, result1);
	console.log("test Result = ", reg2, result2);

}



function testProp() {
	console.log("----- test Prop ------");
	let reg = /abc/ig;

	// ES5的source属性
	// 返回正则表达式的正文
	console.log("source = ", reg.source);

	// ES6的flags属性
	// 返回正则表达式的修饰符
	console.log("flags = ", reg.flags);
}




testMatch();
testReplace();
testSearch();
testSplit();

testModifier();
testProp();