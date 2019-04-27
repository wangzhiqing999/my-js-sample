"use strict";

var myTimezoneService = {


	// 获取当前时区.
	getCurrentTimezone: function() {
		var offset = new Date().getTimezoneOffset();
		return  -1 * offset / 60;
	},

	// 格式化时间.
	formatTimeNumber: function(i) {
		if (i<10) {
			i = "0" + i;
		}
		return i
	},

	// 获取日期时间的字符串.
	getDateTimeString: function(date) {
		var y = date.getFullYear();
		var M = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		M = this.formatTimeNumber(M);
		m = this.formatTimeNumber(m);
		s = this.formatTimeNumber(s);
		return "" + y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
	},

	// 获取时间的字符串.
	getTimeString: function(date) {
		var h = date.getHours();
		var m = date.getMinutes();
		var s = date.getSeconds();
		m = this.formatTimeNumber(m);
		s = this.formatTimeNumber(s);
		return "" + h + ":" + m + ":" + s;
	},



	// 转换时区.
	// 是将 “当前时区” 的时间， 转换为目标时区的时间。
	converTimezone: function(sourceDate, toTimezone) {

		// 取得源时间与格林威治标准时间 (GMT) 的分钟差。
		var gmtOffset = sourceDate.getTimezoneOffset();

		// 取得 1970 年 1 月 1 日至今的毫秒数。
		var times = sourceDate.getTime();

		// 转换为 GMT 的毫秒数。
		var gmtTimes = times + gmtOffset * 60 * 1000;

		// 目标时区的毫秒数.
		var toTimes = gmtTimes + toTimezone * 60 * 60 * 1000;

		return new Date(toTimes);
	}
}