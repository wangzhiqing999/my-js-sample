

function testSet1() {
	// 以前，为变量赋值，只能直接指定值。
	console.log("----- Before es6. -----");	
	let a = 1;
	let b = 2;
	let c = 3;	
	console.log("a,b,c = ", a,b,c);
	
	// ES6 允许写成下面这样。
	console.log("on es6.");	
	let [x, y, z] = [7, 8, 9];
	console.log("x,y,z = ", x,y,z);
}



function testSet2() {
	// 允许指定默认值。
	console.log("----- Test default value. ----");	
	
	let [x, y = 100] = [25];
	console.log("x,y = ", x,y);
}



function testSet3() {
	// 测试对象.
	console.log("----- Test Object. ----");
	
	let { x, y } = { y: "456", x: "123" };
	console.log("x,y = ", x,y);
}




function testSet4() {
	// 测试对象.
	console.log("----- Test Object diff name. ----");
	
	// 定义对象.
	let obj = { first: 'hello', last: 'world' };
	
	// 名称一致的处理.
	let { first, last } = obj;
	console.log("first,last = ", first,last);
	
	// 名称不一致的处理.
	let { first:x, last:y } = obj;
	console.log("x,y = ", x,y);
}




function testSet5() {
	// 测试字符串.
	console.log("----- Test string. ----");
	
	const [a, b, c, d, e] = 'hello';
	console.log("a,b,c,d,e = ", a,b,c,d,e);
	
	let {length : len} = 'hello';
	console.log("len = ", len);
}





function add([x, y]){
  return x + y;
}
function testSet6() {
	// 测试函数.
	console.log("----- Test function. ----");
	console.log("add([1, 2]) = ", add([1, 2]));
}






function example7() {
	// 一个函数， 返回多个值.
	return [1, 2, 3];
}
function testSet7() {
	// 测试函数 返回多个值.
	console.log("----- Test function. return mul value ----");
	let [a, b, c] = example7();
	console.log("a,b,c = ", a,b,c);
}



function example8() {
	// 一个函数，返回对象.
	return {
		foo: 1,
		bar: 2
	};
}
function testSet8() {
	// 测试函数 返回对象.
	console.log("----- Test function. return object. ----");
	let { foo, bar } = example8();
	console.log("foo, bar = ", foo, bar);
}




function f9([x, y, z]) {
	console.log("f9 running... x,y,z = ", x,y,z);
}
function f10({x, y, z}) {
	console.log("f10 running... x,y,z = ", x,y,z);
}
function testSet9() {
	// 测试函数的 参数.
	console.log("----- Test function param. ----");
	f9([1,2,3]);
	f10({z: 3, y: 2, x: 1});
}





function testSet10() {
	console.log("----- Test json. ----");
	// 测试 json 对象获取.
	let jsonData = {
		id: 42,
		status: "OK",
		data: [867, 5309]
	};

	let { id, status, data: number } = jsonData;

	console.log("id, status, number = ", id, status, number);

}





function testSet11() {
	console.log("----- Test for of Map. ----");
	// 测试 用for...of循环遍历 Map
	var map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');
	map.set('third', 'abcdefg!');

	for (let [key, value] of map) {
		console.log(key + " is " + value);
	}
}




testSet1();
testSet2();
testSet3();
testSet4();
testSet5();
testSet6();
testSet7();
testSet8();
testSet9();
testSet10();
testSet11();