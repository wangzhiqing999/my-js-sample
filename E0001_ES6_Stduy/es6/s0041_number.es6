
function test0b0o() {
	console.log("----- test 0b and 0o -----");
	// ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
	console.log("is 0b111110111 === 503 ?", 0b111110111 === 503);
	console.log("is 0o767 === 503 ?", 0o767 === 503);
}



function testParse() {
	console.log("----- test Number.parseInt(), Number.parseFloat() -----");
	// ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。
	// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。

	console.log("is Number.parseInt === parseInt ?", Number.parseInt === parseInt);
	console.log("is Number.parseFloat === parseFloat ?", Number.parseFloat === parseFloat);
}


function testIsInteger() {
	console.log("----- test Number.isInteger() -----");
	// Number.isInteger()用来判断一个值是否为整数。
	// 需要注意的是，在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。


	console.log("is Number.isInteger(25)  ?", 	Number.isInteger(25) );
	console.log("is Number.isInteger(25.0) ?",	Number.isInteger(25.0));
	console.log("is Number.isInteger(25.1) ?",	Number.isInteger(25.1));
	console.log("is Number.isInteger('25') ?",	Number.isInteger('25'));
	console.log("is Number.isInteger(true) ?",	Number.isInteger(true));
}


function testEPSILON() {
	console.log("----- test Number.EPSILON -----");

	// ES6在Number对象上面，新增一个极小的常量Number.EPSILON。
	console.log("Number.EPSILON = ", 	Number.EPSILON );


	// 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。
	let result = 0.1 + 0.2;
	console.log("0.1 + 0.2 = ", result);

	result = result - 0.3;
	console.log("0.1 + 0.2 - 0.3 = ", result);


	// 但是如果这个误差能够小于Number.EPSILON，我们就可以认为得到了正确结果。
	// 因此，Number.EPSILON的实质是一个可以接受的误差范围。
	console.log("Is 0.1 + 0.2 - 0.3 <  Number.EPSILON ?", result <  Number.EPSILON);
}



function testIsSafeInteger() {
	console.log("----- test Number.isSafeInteger() -----");

	// JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。


	// 代码中，超出2的53次方之后，一个数就不精确了。
	console.log("Is Math.pow(2, 53) === Math.pow(2, 53) + 1 ?", Math.pow(2, 53) === Math.pow(2, 53) + 1);


	// ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
	console.log("Number.MAX_SAFE_INTEGER = ", Number.MAX_SAFE_INTEGER);
	console.log("Number.MIN_SAFE_INTEGER = ", Number.MIN_SAFE_INTEGER);

	// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。


	console.log("Number.isSafeInteger(9007199254740990) = ", Number.isSafeInteger(9007199254740990));
	console.log("Number.isSafeInteger(9007199254740992) = ", Number.isSafeInteger(9007199254740992));


	console.log("Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) = ", Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
	console.log("Number.isSafeInteger(Number.MIN_SAFE_INTEGER) = ", Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
	console.log("Number.isSafeInteger(Number.MAX_SAFE_INTEGER) = ", Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
	console.log("Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) = ", Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

	// 实际使用这个函数时，需要注意。验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值。
}




function testMath() {
	// ES6在Math对象上新增了与数学相关的方法。所有这些方法都是静态方法，只能在Math对象上调用。

	console.log("----- test Math -----");

	console.log("-- Math.trunc");
	// Math.trunc方法用于去除一个数的小数部分，返回整数部分。
	console.log("Math.trunc(4.1) = ", Math.trunc(4.1));
	console.log("Math.trunc(4.9) = ", Math.trunc(4.9));
	console.log("Math.trunc(-4.1) = ", Math.trunc(-4.1));
	console.log("Math.trunc(-4.9) = ", Math.trunc(-4.9));
	console.log("Math.trunc(-0.9) = ", Math.trunc(-0.9));
	// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
	console.log("Math.trunc('123.456') = ", Math.trunc('123.456'));
	// 对于空值和无法截取整数的值，返回NaN。
	console.log("Math.trunc(NaN) = ", Math.trunc(NaN));
	console.log("Math.trunc('abc') = ", Math.trunc('abc'));
	console.log("Math.trunc() = ", Math.trunc());



	console.log("-- Math.sign");
	// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
	// 它会返回五种值。
	//     -参数为正数，返回+1；
	//     -参数为负数，返回-1；
	//     -参数为0，返回0；
	//     -参数为-0，返回-0;
	//     -其他值，返回NaN。
	console.log("Math.sign(4.1) = ", Math.sign(4.1));
	console.log("Math.sign(-4.1) = ", Math.sign(-4.1));
	console.log("Math.sign(0) = ", Math.sign(0));
	console.log("Math.sign(-0) = ", Math.sign(-0));
	console.log("Math.sign(NaN) = ", Math.sign(NaN));
	console.log("Math.sign('123') = ", Math.sign('123'));
	console.log("Math.sign('abc') = ", Math.sign('abc'));
	console.log("Math.sign() = ", Math.sign());
}



test0b0o();
testParse();
testIsInteger();
testEPSILON();
testIsSafeInteger();
testMath();

