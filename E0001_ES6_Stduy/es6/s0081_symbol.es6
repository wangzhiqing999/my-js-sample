


// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
// 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

// Symbol 值通过Symbol函数生成。
// 这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。
// 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。


function testSymbol() {
	console.log("------测试 基本定义. ");

	let s = Symbol();
	console.log("s = Symbol()  = ", s);

	let s1 = Symbol('foo');
	let s2 = Symbol('bar');

	console.log("s1 = Symbol('foo')  = ", s1);
	console.log("s2 = Symbol('bar')  = ", s2);
}



function testNotEq() {
	console.log("------测试 值的不同. ");

	// Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

	// 没有参数的情况
	let s1 = Symbol();
	let s2 = Symbol();
	console.log("s1 == s2 ?  = ", s1 == s2);

	// 有参数的情况
	let s3 = Symbol('foo');
	let s4 = Symbol('foo');
	console.log("s3 == s4 ?  = ", s3 == s4);
}



function testPropName() {
	console.log("------测试 作为属性名的 Symbol ");

	// 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
	// 这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

	var mySymbol = Symbol();

	// 第一种写法
	var a = {};
	a[mySymbol] = 'Hello!';

	// 第二种写法
	var b = {
	  [mySymbol]: 'Hello!'
	};

	// 第三种写法
	var c = {};
	Object.defineProperty(c, mySymbol, { value: 'Hello!' });


	console.log("a[mySymbol]  = ", a[mySymbol] );
	console.log("b[mySymbol]  = ", b[mySymbol] );
	console.log("c[mySymbol]  = ", c[mySymbol] );


	// 注意，Symbol 值作为对象属性名时，不能用点运算符。
	// 因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。
	console.log("a.mySymbol  = ", a.mySymbol );
	console.log("b.mySymbol  = ", b.mySymbol );
	console.log("c.mySymbol  = ", c.mySymbol );
}



testSymbol();
testNotEq();
testPropName();