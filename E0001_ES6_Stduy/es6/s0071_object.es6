function testSimple() {
	console.log("----- 测试属性的简洁表示法. -----");

	// ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
	var x = 100, y = 200, z = 300;
	var testObj = {x, y, z};
	console.log("-- testObj = ", testObj);
}



function testPropName() {
	console.log("----- 测试属性名表达式. -----");

	var x001 = 100, y002 = 200, z003 = 300;
	var testObj = {x001, y002, z003};

	console.log("-- testObj = ", testObj);
	console.log("-- testObj.x001 = ", testObj.x001);
	console.log("-- testObj['y002'] = ", testObj['y002']);
	console.log("-- testObj['z' + '003'] = ", testObj['z' + '003']);
}





const person = {

	// 测试属性.
	personID : 12345,

	// 测试方法.
	sayName() {
		console.log('hello!');
	},

	// 测试 getter/setter.
	get age() {},
	set age(x) {}
};

function testFuncName() {
	console.log("----- 测试方法的 name 属性. -----");

	console.log("-- person = ", person);
	console.log("-- person.sayName.name = ", person.sayName.name);

	const personDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
	console.log("-- personDescriptor.get.name  = ", personDescriptor.get.name);
	console.log("-- personDescriptor.set.name  = ", personDescriptor.set.name);
}



function testObjectIs() {
	console.log("----- 测试 Object.is(). -----");

	// ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。
	// 它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。
	// JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

	// ES6提出“Same-value equality”（同值相等）算法，用来解决这个问题。
	// Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
	console.log("-- Object.is('foo', 'foo') = ", Object.is('foo', 'foo'));
	console.log("-- Object.is({}, {}) = ", Object.is({}, {}));

	// 不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
	console.log("-- +0 === -0 = ", +0 === -0);
	console.log("-- Object.is(+0, -0) = ", Object.is(+0, -0));

	console.log("-- NaN === NaN = ", NaN === NaN);
	console.log("-- Object.is(NaN, NaN) = ", Object.is(NaN, NaN));


}



function testObjectAssign() {
	console.log("----- 测试 Object.assign(). -----");

	// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

	let target = { a: 1 };
	let source1 = { b: 2 };
	let source2 = { c: 3 };
	// Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
	Object.assign(target, source1, source2);
	console.log("target = ", target);


	// 注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
	source1 = { b: 22, c: 33 };
	source2 = { c: 333 };
	Object.assign(target, source1, source2);
	console.log("target = ", target);
}



function testPropEnumerable() {
	console.log("----- 测试 属性的可枚举性 . -----");

	console.log("-- person = ", person);

	// 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
	let personDescriptor = Object.getOwnPropertyDescriptor(person, 'personID');
	console.log("-- personDescriptor [personID] = ", personDescriptor);

	personDescriptor = Object.getOwnPropertyDescriptor(person, 'sayName');
	console.log("-- personDescriptor [sayName] = ", personDescriptor);

	personDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
	console.log("-- personDescriptor [age] = ", personDescriptor);


	// 描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。
	// ES5 有三个操作会忽略enumerable为false的属性。
	//   -for...in循环：只遍历对象自身的和继承的可枚举的属性
	//   -Object.keys()：返回对象自身的所有可枚举的属性的键名
	//   -JSON.stringify()：只串行化对象自身的可枚举的属性
	// ES6 新增了一个操作 Object.assign()，会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
}



function testForEach() {
	console.log("----- 测试 属性的遍历 . -----");

	console.log("-- person = ", person);

	// ES6 一共有5种方法可以遍历对象的属性。
	// （1）for...in
	// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
	for(let v in person) {
		console.log("-- for(let v in person)  v = ", v);
	}

	// （2）Object.keys(obj)
	// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。
	let keys = Object.keys(person);
	for(let v in keys) {
		console.log("-- Object.keys(person)  key = ", v);
	}

	// （3）Object.getOwnPropertyNames(obj)
	// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。
	let names = Object.getOwnPropertyNames(person);
	for(let v in names) {
		console.log("-- Object.getOwnPropertyNames(person)  name = ", v);
	}

	// （4）Object.getOwnPropertySymbols(obj)
	// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。
	names = Object.getOwnPropertySymbols(person);
	for(let v in names) {
		console.log("-- Object.getOwnPropertySymbols(person)  name = ", v);
	}

	// （5）Reflect.ownKeys(obj)
	// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举。
	keys = Reflect.ownKeys(person);
	for(let v in keys) {
		console.log("-- Reflect.ownKeys(person)  key = ", v);
	}
}


function testNull() {
	console.log("----- 测试 Null 传导运算符 . -----");

	let messageArray = [
		undefined,
		null,
		{ body : null },
		{
			body :  {user : null}
		},
		{
			body :  {
				user : { firstName : null }
			}
		},
		{
			body :  {
				user : { firstName : "Hello World!" }
			}
		},
	];

	for(let message of messageArray) {
		// 复杂写法.
		let firstName1 = (message
			&& message.body
			&& message.body.user
			&& message.body.user.firstName) || 'default';

		// 简化写法.
		//let firstName2 = message?.body?.user?.firstName || 'default';

		console.log("-- message = ", message);
		console.log("-- firstName1 = ", firstName1);
		//console.log("-- firstName2 = ", firstName2);
	}

}




testSimple();
testPropName();
testFuncName();
testObjectIs();
testObjectAssign();
testPropEnumerable();
testForEach();
testNull();