
function testFuncParam(x, y = 100, z = 200) {
	// 测试函数的参数的默认值.
	console.log("-- testFuncParam running! x,y,z = ", x,y,z);
}

function testFuncParamDefaultValue() {
	console.log("----- 测试函数参数的默认值. -----");

	testFuncParam(1);
	testFuncParam(1,2);
	testFuncParam(1,2,3);
	testFuncParam(1,undefined,3);
}



function testAdd(...values) {
	let sum = 0;
	for (var val of values) {
		sum += val;
	}
	return sum;
}

function testRest() {
	console.log("----- 测试 rest参数 -----");

	// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
	// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
	console.log("testAdd(1) = ", testAdd(1));
	console.log("testAdd(1, 2) = ", testAdd(1, 2));
	console.log("testAdd(1, 2, 3) = ", testAdd(1, 2, 3));
	console.log("testAdd(1, 2, 3, 4) = ", testAdd(1, 2, 3, 4));
	console.log("testAdd(1, 2, 3, 4, 5) = ", testAdd(1, 2, 3, 4, 5));
}







testFuncParamDefaultValue();
testRest();
