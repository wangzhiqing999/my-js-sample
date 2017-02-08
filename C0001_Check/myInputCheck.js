
var myInputCheck = {

	// 是否包含6位连续数字.
	isLike123456 : function(inputValue){
		if(inputValue == "123456"
			|| inputValue == "234567"
			|| inputValue == "345678"
			|| inputValue == "456789"
			|| inputValue == "567890"
			|| inputValue == "678901"
			|| inputValue == "789012"
			|| inputValue == "890123"
			|| inputValue == "901234"
			|| inputValue == "012345") {
			return true;
		}

		if(inputValue == "654321"
			|| inputValue == "765432"
			|| inputValue == "876543"
			|| inputValue == "987654"
			|| inputValue == "098765"
			|| inputValue == "109876"
			|| inputValue == "210987"
			|| inputValue == "321098"
			|| inputValue == "432109"
			|| inputValue == "543210") {
			return true;
		}

		return false;
	},



	// 是否包含三位相同数字.
	isSame3Number : function(inputValue){
		if(inputValue.indexOf("111")>=0
			|| inputValue.indexOf("222")>=0
			|| inputValue.indexOf("333")>=0
			|| inputValue.indexOf("444")>=0
			|| inputValue.indexOf("555")>=0
			|| inputValue.indexOf("666")>=0
			|| inputValue.indexOf("777")>=0
			|| inputValue.indexOf("888")>=0
			|| inputValue.indexOf("999")>=0
			|| inputValue.indexOf("000")>=0 ) {
			return true;
		}

		return false;
	},




	// 是否仅仅是数字正则表达式.
	isNumberOnlyReg : /^[0-9]+$/,
	// 是否仅仅是数字.
	isNumberOnly  : function(inputValue){
		return this.isNumberOnlyReg.test(inputValue);
	},


	// 是否仅仅是数字或字母正则表达式.
	isNumberOrLetterOnlyReg : /^[A-Za-z0-9]+$/,
	// 是否仅仅是数字或字母.
	isNumberOrLetterOnly  : function(inputValue){
		return this.isNumberOrLetterOnlyReg.test(inputValue);
	},


	// 是否是数字与字母正则表达式 (数字与字母组合)
	isNumberAndLetterOnlyReg : /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/,
	// 是否是数字与字母 (数字与字母组合)
	isNumberAndLetterOnly : function(inputValue){
		return this.isNumberAndLetterOnlyReg.test(inputValue);
	},




	// 是否是电子邮件正则表达式.
	isEmailReg : /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
	// 是否是电子邮件.
	isEmail : function(inputValue){
		return this.isEmailReg.test(inputValue);
	},



	// 是否是身份证号码正则表达式.
	isIDNumberReg : /(^\d{18}$)|(^\d{17}(\d|X|x)$)/,

	// 身份证的 省.
	idNumberPi: [11, 12, 13, 14, 15, 21, 22, 23, 31, 32, 33, 34, 35, 36, 37, 41, 42, 43, 44, 45, 46, 50, 51, 52, 53, 54, 61, 62, 63, 64, 65, 71, 81, 82, 91],

	// 身份证的 加权因子
	idNumberWi: [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],

	// 身份证的 余数0~10对应的校验码
	idNumberXi: [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2],

	// 是否是身份证号码.
	isIDNumber : function(sIdCard){
		// 首先， 先做最基本的 正则表达式检查.
		if(this.isIDNumberReg.test(sIdCard) === false)
		{
		   this.checkResult = "身份证输入不合法";
		   return false;
		}

		// 数据有效性检查.
		// 省是否存在.
		var isExistsPi = false;
		// 取得省代码.
		var p2 = sIdCard.substr(0, 2);
		// 检查省代码是否存在.
		for (var i = 0; i < this.idNumberPi.length; i++) {
			if (this.idNumberPi[i] == p2) {
				// 存在.
				isExistsPi = true;
				break;
			};
		};
		// 省不存在的情况下，返回错误.
		if(isExistsPi === false) {
			this.checkResult = "身份证号码中，省份代码不正确！";
			return false;
		}

		// 检查出生年月日.
		var year = parseFloat(sIdCard.substr(6, 4));
		var month = parseFloat(sIdCard.substr(10, 2));
		var day = parseFloat(sIdCard.substr(12, 2));
		// 获得生日.
		var checkDay = new Date(year, month - 1, day);
		// 获得今日.
		var nowDay = new Date();
		if (1900 > year) {
			// 1900年以前出生的.
			this.checkResult = "通过身份证号码，检测到出生于1900年以前！";
			return false;
		}
		if(year > nowDay.getFullYear()) {
			// 证件上的年份， 大于今年.
			this.checkResult = "通过身份证号码，检测到出生于今年以后！";
			return false;
		}
		if(month != (checkDay.getMonth() + 1)) {
			this.checkResult = "通过身份证号码，检测到出生月有误！";
			return false;
		}
		if(day != checkDay.getDate()) {
			this.checkResult = "通过身份证号码，检测到出生日有误！";
			return false;
		};

		// 检查身份证最后一位的校验位。
		var aIdCard = sIdCard.split("");
		var sum = 0;
		for (var i = 0; i < this.idNumberWi.length; i++) {
			sum += this.idNumberWi[i] * aIdCard[i]; //线性加权求和
		};
		var index = sum % 11;//求模，可能为0~10,可求对应的校验码是否于身份证的校验码匹配
		if (this.idNumberXi[index] != aIdCard[17].toUpperCase()) {
			this.checkResult = "身份证号码校验位有误！";
			return false;
		};

		// 如果能执行到这里， 认为身份证号码输入无误.
		this.checkResult = "success";
		return true;
	},





	// 检查结果.
	checkResult : ""
};




