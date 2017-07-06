
function testUnicode() {
	console.log("----- Test Unicode -----");
	// JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。
	console.log("\\u0061 = ", "\u0061");

	// 但是，这种表示法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。
	console.log("\\uD842\\uDFB7 = ", "\uD842\uDFB7");
	console.log("\\u20BB7 = ", "\u20BB7");

	// ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
	console.log("\\u{20BB7} = ", "\u{20BB7}");
	console.log("\\u{41}\\u{42}\\u{43} = ", "\u{41}\u{42}\u{43}");
}



function is32Bit(c) {
	// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
	return c.codePointAt(0) > 0xFFFF;
}
function testCodePointAt() {
	console.log("----- Test codePointAt. -----");
	console.log("is32Bit(𠮷) = " +  is32Bit("𠮷"));
	console.log("is32Bit(国) = " +  is32Bit("国"));
	console.log("is32Bit(g) = " +  is32Bit("g"));
}



function testForOf() {
	console.log("----- Test for of. -----");

	let text = 'foo𠮷foo';

	console.log("使用基本的[]");
	for (let i = 0; i < text.length; i++) {
		console.log(text[i]);
	}

	console.log("使用 for of");
	for (let codePoint of text) {
		console.log(codePoint);
	}
}



function testAt() {
	console.log("----- Test at. -----");

	let text = '𠮷foo';

	console.log("charAt(0) = ", text.charAt(0));
	console.log("at(0) = ", text.at(0));

	console.log("charAt(1) = ", text.charAt(1));
	console.log("at(1) = ", text.at(1));

	console.log("charAt(2) = ", text.charAt(2));
	console.log("at(2) = ", text.at(2));
}



function testSearch() {
	console.log("----- Test includes(), startsWith(), endsWith() . -----");
	// 使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
	let text = "abcdefghijklmn";
	console.log("text = ", text);
	console.log("text.includes('efg') = ", text.includes("efg"));
	console.log("text.includes('xyz') = ", text.includes("xyz"));
	console.log("text.includes('efg', 5) = ", text.includes("efg", 5));

	console.log("text.startsWith('abc') = ", text.startsWith("abc"));
	console.log("text.startsWith('bcd') = ", text.startsWith("bcd"));
	console.log("text.startsWith('bcd', 1) = ", text.startsWith("bcd", 1));

	console.log("text.endsWith('lmn') = ", text.endsWith("lmn"));
	console.log("text.endsWith('ijk') = ", text.endsWith("ijk"));
	console.log("text.endsWith('ijk',11) = ", text.endsWith("ijk",11));
}




function testRepeat() {
	console.log("----- Test repeat() . -----");
	// repeat方法返回一个新字符串，表示将原字符串重复n次。

	console.log("'x'.repeat(3) = ", 'x'.repeat(3));
	console.log("'hello'.repeat(2) = ", 'hello'.repeat(2));
	console.log("'na'.repeat(0) = ", 'na'.repeat(0));

	// 参数如果是小数，会被取整。
	console.log("'na'.repeat(2.9) = ", 'na'.repeat(2.9));
}



function testPad() {
	console.log("----- Test padStart()，padEnd() . -----");

	// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
	// padStart()用于头部补全，padEnd()用于尾部补全。
	console.log("'x'.padStart(5, 'ab')  = ", 'x'.padStart(5, 'ab') );
	console.log("'x'.padStart(4, 'ab')  = ", 'x'.padStart(4, 'ab') );
	console.log("'x'.padEnd(5, 'ab') = ", 'x'.padEnd(5, 'ab') );
	console.log("'x'.padEnd(4, 'ab') = ", 'x'.padEnd(4, 'ab'));

	// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
	console.log("'xxx'.padStart(2, 'ab')  = ", 'xxx'.padStart(2, 'ab') );
	console.log("'xxx'.padEnd(2, 'ab') = ", 'xxx'.padEnd(2, 'ab'));

	// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
	console.log("'abc'.padStart(10, '0123456789') = ", 'abc'.padStart(10, '0123456789'));

}



function testTemplate() {

	console.log("----- Test template string . -----");

	// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
	// 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

	let name = "Bob", time = "today";
	let msg = `Hello ${name}, how are you ${time}?`
	console.log(msg);
}




testUnicode();
testCodePointAt();
testForOf();

// testAt();

testSearch();
testRepeat();

// testPad();

testTemplate();
