
function testMap1() {
	console.log("----- test Map 1 -----");

	// 初始化.
	const m = new Map();
	console.log("-- 构造函数执行之后.", m, m.size);


	// 通过set方法向 Map 结构加入成员.
	m.set("Name", "Test");
	m.set("Age", 25);
	m.set(100, "Key Value");
	console.log("-- set 函数执行之后.", m, m.size);


	// get方法读取key对应的键值，如果找不到key，返回undefined。
	console.log("m.get('Name') = ", m.get('Name'));
	console.log("m.get('Age') = ", m.get('Age'));
	console.log("m.get(100) = ", m.get(100));
	console.log("m.get(101) = ", m.get(101));


	// has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
	console.log("m.has('Name') = ", m.has('Name'));
	// delete方法删除某个键，返回true。如果删除失败，返回false。
	console.log("m.delete('Name') = ", m.delete('Name'));
	console.log("m.has('Name') = ", m.has('Name'));


	// clear()：清除所有成员，没有返回值。
	m.clear();
	console.log("-- clear 函数执行之后.", m, m.size);
}



function testMap2() {
	console.log("----- test Map 2 -----");

	// 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
	const map = new Map([
		['name', '张三'],
		['title', 'Author']
	]);
	console.log("-- 构造函数执行之后.", map, map.size);


	// set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
	map.set("Age", 24);
	map.set("title", "Programmer");
	console.log("-- set(key, value) 函数执行之后.", map, map.size);
}



function testMap3() {
	console.log("----- test Map 3 -----");

	// Map 结构原生提供三个遍历器生成函数和一个遍历方法。
	// 	-keys()：返回键名的遍历器。
	// 	-values()：返回键值的遍历器。
	// 	-entries()：返回所有成员的遍历器。
	// 	-forEach()：遍历 Map 的所有成员。

	const map = new Map([
		['F', 'no'],
		['T',  'yes'],
	]);

	for (let key of map.keys()) {
		console.log("-- for (let key of map.keys())  key = ", key);
	}

	for (let value of map.values()) {
		console.log("-- for (let value of map.values())  value = ", value);
	}

	for (let item of map.entries()) {
		console.log("-- for (let item of map.entries()) item = ", item[0], item[1]);
	}

	for (let [key, value] of map.entries()) {
		console.log("-- for (let [key, value] of map.entries())  key and value = ", key, value);
	}

	map.forEach(function(value, key, map) {
		console.log("-- map.forEach(function(value, key, map)  Key: %s, Value: %s", key, value);
	});
}

testMap1();
testMap2();
testMap3();
