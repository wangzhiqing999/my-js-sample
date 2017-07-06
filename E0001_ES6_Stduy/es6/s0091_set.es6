
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

function testSet1() {
	console.log("----- test Set 1 -----");

	// 初始化.
	const s = new Set();
	// 通过add方法向 Set 结构加入成员.
	[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
	// 输出 Set 中的数据， 验证 Set 结构不会包含重复的值。
	for (let i of s) {
		console.log(i);
	}
}




function testSet2() {
	console.log("----- test Set 2 -----");

	// Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。.

	console.log("-- s = new Set([1, 2, 3, 4, 4]);");
	let s = new Set([1, 2, 3, 4, 4]);
	for (let i of s) {
		console.log(i);
	}

	console.log("-- s = new Set([1, 2, 3, 4, 5, 5, 5, 5]);");
	s = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
	for (let i of s) {
		console.log(i);
	}
}



function testSet3() {
	console.log("----- test Set 3 -----");

	// 初始化.
	const s = new Set();
	console.log("-- 构造函数执行之后.", s, s.size);


	// add(value)：添加某个值，返回Set结构本身。
	s.add(1).add(2).add(2);
	s.add(3);
	console.log("-- add 函数执行之后.", s, s.size);


	// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
	s.delete(3);
	console.log("-- delete 函数执行之后.", s, s.size);


	// has(value)：返回一个布尔值，表示该值是否为Set的成员。
	console.log("-- has(2) 函数执行结果.", s.has(2));
	console.log("-- has(3) 函数执行结果.", s.has(3));


	// clear()：清除所有成员，没有返回值。
	s.clear();
	console.log("-- clear 函数执行之后.", s, s.size);

}




function testSet4() {
	console.log("----- test Set 4 -----");

	// Set 结构的实例有四个遍历方法，可以用于遍历成员。
	//	-keys()：返回键名的遍历器
	//	-values()：返回键值的遍历器
	//	-entries()：返回键值对的遍历器
	//	-forEach()：使用回调函数遍历每个成员

	let set = new Set(['red', 'green', 'blue']);

	for (let item of set.keys()) {
		console.log("-- for (let item of set.keys())  item = ", item);
	}

	for (let item of set.values()) {
		console.log("-- for (let item of set.values())  item = ", item);
	}

	for (let item of set.entries()) {
		console.log("-- for (let item of set.entries())  item = ", item);
	}

	set.forEach((value, key) => console.log("set.forEach((value, key)  value and key =  ", value,  key));
}



function testSet5() {
	console.log("----- test Set 5 -----");

	// 数组的map和filter方法也可以用于 Set .
	let set = new Set([1, 2, 3, 4, 5, 6, 7]);
	console.log("-- 初始化之后.", set);

	let result1 = new Set([...set].map(x => x * 2));
	console.log("-- map result = ", result1);

	let result2 = new Set([...set].filter(x => (x % 2) == 0));
	console.log("-- filter result = ", result2);
}



function testSet6() {
	console.log("----- test Set 6 -----");

	// 使用 Set 可以实现并集（Union）、交集（Intersect）和差集（Difference）
	let a = new Set([1, 2, 3]);
	let b = new Set([4, 3, 2]);
	console.log("-- 初始化之后. a = ", a);
	console.log("-- 初始化之后. b = ", b);


	// 并集
	let union = new Set([...a, ...b]);
	console.log("-- 并集结果 = ", union);

	// 交集
	let intersect = new Set([...a].filter(x => b.has(x)));
	console.log("-- 交集结果 = ", intersect);

	// 差集
	let difference = new Set([...a].filter(x => !b.has(x)));
	console.log("-- 差集结果 = ", difference);
}


testSet1();
testSet2();
testSet3();
testSet4();
testSet5();
testSet6();
