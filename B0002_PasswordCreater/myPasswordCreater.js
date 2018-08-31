"use strict"

// 密码生成器.
var myPasswordCreater = {

	// 数字字符.
	_numberChars : "0123456789",

	// 小写字符.
	_lowerCaseChars : "abcdefghijklmnopqrstuvwxyz",

	// 大写字符.
	_upperCaseChars : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",

	// 符号字符.
	_nonalphanumeric : "~!@#$%^&*()_+{}|:\"<>?`-=[]\\;',./",

	// 是否使用数字.
	isUseNumber : true,

	// 是否使用小写.
	isUseLowerCase : true,

	// 是否使用大写.
	isUseUpperCase : true,

	// 是否使用符号
	isUseNonalphanumeric : false,

	// 密码长度.
	passwordLength : 6,


	// 创建随机密码
	createRandomPassword : function () {

		// 可用的字符.
		var useableChars = "";

		// 是否使用数字.
		if(this.isUseNumber) {
			useableChars = useableChars + this._numberChars;
		}

		// 是否使用小写
		if(this.isUseLowerCase) {
			useableChars = useableChars + this._lowerCaseChars;
		}

		// 是否使用大写
		if(this.isUseUpperCase) {
			useableChars = useableChars + this._upperCaseChars;
		}

		// 是否使用符号
		if(this.isUseNonalphanumeric) {
			useableChars = useableChars + this._nonalphanumeric;
		}

		// 可用字符总长度
		var totalLength = useableChars.length;

		// 预期结果.
		var result = "";

		// 根据密码长度. 随机生成每一个密码字符.
		for(var i = 0;  i < this.passwordLength; i ++){
			// 计算临时的索引 = 0 ~ 1 之间的随机数 * 可用字符总长度
			var tempIndex = Math.random() * totalLength;
			// 向下取整.
			tempIndex = Math.floor(tempIndex);

			// 排除最大值.
			if(tempIndex == totalLength) {
				tempIndex = totalLength - 1;
			}

			// 追加密码字符.
			result = result + useableChars[tempIndex];
		}

		// 返回.
		return result;
	}

}