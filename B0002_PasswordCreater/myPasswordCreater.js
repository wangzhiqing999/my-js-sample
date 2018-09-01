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
	_nonalphanumeric : "~!@#$%^&*_+|:-=.",



	// 是否使用数字.
	_isUseNumber : true,

	// 是否使用数字的 setter / getter.
	get isUseNumber() {return this._isUseNumber},
	set isUseNumber(x) {
		this._isUseNumber = x;
		// 重至可用的字符
		this._useableChars = "";
	},


	// 是否使用小写.
	_isUseLowerCase : true,

	// 是否使用小写的 setter / getter.
	get isUseLowerCase() {return this._isUseLowerCase},
	set isUseLowerCase(x) {
		this._isUseLowerCase = x;
		// 重至可用的字符
		this._useableChars = "";
	},


	// 是否使用大写.
	_isUseUpperCase : true,

	// 是否使用大写的 setter / getter.
	get isUseUpperCase() {return this._isUseUpperCase},
	set isUseUpperCase(x) {
		this._isUseUpperCase = x;
		// 重至可用的字符
		this._useableChars = "";
	},


	// 是否使用符号
	_isUseNonalphanumeric : false,

	// 是否使用符号的 setter / getter.
	get isUseNonalphanumeric() {return this._isUseNonalphanumeric},
	set isUseNonalphanumeric(x) {
		this._isUseNonalphanumeric = x;
		// 重至可用的字符
		this._useableChars = "";
	},


	// 密码长度.
	passwordLength : 6,


	// 可用的字符
	_useableChars : "",

	// 初始化可使用字符.
	_initUseableChars : function() {
		// 是否使用数字.
		if(this._isUseNumber) {
			this._useableChars = this._useableChars + this._numberChars;
		}

		// 是否使用小写
		if(this._isUseLowerCase) {
			this._useableChars = this._useableChars + this._lowerCaseChars;
		}

		// 是否使用大写
		if(this._isUseUpperCase) {
			this._useableChars = this._useableChars + this._upperCaseChars;
		}

		// 是否使用符号
		if(this._isUseNonalphanumeric) {
			this._useableChars = this._useableChars + this._nonalphanumeric;
		}
	},


	// 创建随机密码
	createRandomPassword : function () {

		// 没有可用字符的情况下，尝试重算.
		// 这里的处理逻辑，是 避免遇到 批量生成一批 密码的时候，每一次，都判断，生成一次 密码可用字符.
		// 而是修改为， 当生成条件发生变化的情况下，才生成一次 密码可用字符.
		if(this._useableChars === "") {
			this._initUseableChars();
		}

		// 可用字符总长度
		var totalLength = this._useableChars.length;

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
			result = result + this._useableChars[tempIndex];
		}

		// 返回.
		return result;
	}

}