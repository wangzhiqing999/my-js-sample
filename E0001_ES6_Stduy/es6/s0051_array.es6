
function testFrom() {
	console.log("----- test Array.from -----");

	// Array.from方法用于将两类对象转为真正的数组：
	//    类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
	let arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	};
	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c'];
	// ES6的写法
	let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'];

	console.log("arr1 = ", arr1);
	console.log("arr2 = ", arr2);

	// 只要是部署了Iterator接口的数据结构，Array.from都能将其转为数组。
	console.log("Array.from('hello') = ", Array.from('hello'));

	// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
	console.log("Array.from([1, 2, 3], (x) => x * x) = ", Array.from([1, 2, 3], (x) => x * x));

	// 下面的例子将数组中布尔值为false的成员转为0。
	console.log("Array.from([1, , 2, , 3], (n) => n || 0) = ", Array.from([1, , 2, , 3], (n) => n || 0));

	// 返回各种数据的类型。
	console.log("Array.from([null, [], NaN], (value) => typeof value) =", Array.from([null, [], NaN], (value) => typeof value));
}


function testOf() {
	console.log("----- test Array.of -----");

	// Array.of方法用于将一组值，转换为数组。
	console.log("Array.of(3, 11, 8) = ", Array.of(3, 11, 8) );
	console.log("Array.of(3) = ", Array.of(3) );
	console.log("Array.of() = ", Array.of() );
}



function testcopyWithin() {
	console.log("----- test copyWithin() -----");

	// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
	// 也就是说，使用这个方法，会修改当前数组。
	// 它接受三个参数。
	// 		-target（必需）：从该位置开始替换数据。
	// 		-start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
	// 		-end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。

	console.log("[1, 2, 3, 4, 5].copyWithin(0, 3) = ", [1, 2, 3, 4, 5].copyWithin(0, 3) );

	// 将3号位复制到0号位
	console.log("[1, 2, 3, 4, 5].copyWithin(0, 3, 4) = ", [1, 2, 3, 4, 5].copyWithin(0, 3, 4) );

	// -2相当于3号位，-1相当于4号位
	console.log("[1, 2, 3, 4, 5].copyWithin(0, -2, -1) = ", [1, 2, 3, 4, 5].copyWithin(0, -2, -1) );

}



function testFind() {
	console.log("----- test find() and findIndex()-----");

	// 数组实例的find方法，用于找出第一个符合条件的数组成员。
	// 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
	// 如果没有符合条件的成员，则返回undefined。

	console.log("[1, 4, -5, 10].find((n) => n < 0) = ", [1, 4, -5, 10].find((n) => n < 0) );


	// find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
	var result = [1, 5, 10, 15].find(function(value, index, arr) {
		console.log("do find... ", value, index, arr);
		return value > 9;
	});
	console.log("find result = ", result);


	result = [1, 5, 10, 15].findIndex(function(value, index, arr) {
		console.log("do findIndex... ", value, index, arr);
		return value > 9;
	});
	console.log("findIndex result = ", result);
}




function testFill() {
	console.log("----- test fill()-----");

	// fill方法使用给定值，填充一个数组。
	console.log("['a', 'b', 'c'].fill(7) = ", ['a', 'b', 'c'].fill(7) );
	console.log("new Array(3).fill(7) = ", new Array(3).fill(7) );

	// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
	console.log("['a', 'b', 'c'].fill(7, 1, 2) = ", ['a', 'b', 'c'].fill(7, 1, 2) );
}



function testForOf() {
	console.log("----- test for of -----");

	// ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。
	// 它们都返回一个遍历器对象（详见《Iterator》一章），可以用for...of循环进行遍历，
	// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

	let testArray = ["a", "b", "c"];

	for (let index of testArray.keys()) {
		console.log("-- for (let index of testArray.keys()), index =" , index);
	}

	//for (let elem  of testArray.values()) {
	//	console.log("-- for (let elem  of testArray.values()), elem =" , elem );
	//}

	for (let [index, elem] of testArray.entries()) {
		console.log("-- for (let [index, elem] of testArray.entries()), index and elem =" , index, elem);
	}
}



function testIncludes() {
	console.log("----- test includes() -----");

	// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
	// ES2016 引入了该方法。
	console.log("[1, 2, 3].includes(2) = ", [1, 2, 3].includes(2));
	console.log("[1, 2, 3].includes(4)  = ", [1, 2, 3].includes(4) );
	console.log("[1, 2, NaN].includes(NaN) = ", [1, 2, NaN].includes(NaN));


	// 该方法的第二个参数表示搜索的起始位置，默认为0。
	// 如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
	console.log("[1, 2, 3].includes(3, 3) = ", [1, 2, 3].includes(3, 3));
	console.log("[1, 2, 3].includes(3, -1) = ", [1, 2, 3].includes(3, -1));
}




testFrom();
testOf();

testcopyWithin();
testFind();
testFill();
testForOf();
testIncludes();