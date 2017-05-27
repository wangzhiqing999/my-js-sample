"use strict"

var myCalendar = {

	// ########## 日期处理相关函数. ##########

	// 日期格式化
	//   效果如：2011-07-29
	getShortDateString : function (date) {
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		month = month + 1;
		if (month < 10) month = '0' + month;
		if (day < 10) day = '0' + day;
		var str = year + '-' + month + '-' + day;
		return str;
	},

	// 日期格式化
	//   效果如：20110729
	getYmdDateString : function(date) {
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		month = month + 1;
		if (month < 10) month = '0' + month;
		if (day < 10) day = '0' + day;
		var str = new String(year) + new String(month) + new String(day);
		return str;
	},

	// 用于显示的星期文本.
	displayWeekText : ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],

	// 返回星期几的信息.
	getDisplayWeek : function(pDate) {
		var vWeek = pDate.getDay();
		return this.displayWeekText[vWeek];
	},


	// 取得 周的第一天.
	getWeekFirstDay : function(pDate, pFirstDayIndex) {
		var vTmpFirstDate = pDate;
		while (vTmpFirstDate.getDay() != pFirstDayIndex) {
			vTmpFirstDate = new Date(vTmpFirstDate.getFullYear(), vTmpFirstDate.getMonth(), vTmpFirstDate.getDate() - 1);
		}
		return vTmpFirstDate;
	},

	// 取得 周的最后一天.
	getWeekLastDay : function(pDate, pLastDayIndex) {
		var vTmpLastDate = pDate;
		while (vTmpLastDate.getDay() != pLastDayIndex) {
			vTmpLastDate = new Date(vTmpLastDate.getFullYear(), vTmpLastDate.getMonth(), vTmpLastDate.getDate() + 1);
		}
		return vTmpLastDate;
	},

	// 取得 月的第一天.
	getMonthFirstDay : function(pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth(), 1);
	},

	// 取得 月的最后一天.
	getMonthLastDay : function(pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth() + 1, 0);
	},



	// 取得前一天.
	getPrevDay : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth(), pDate.getDate() - 1);
	},
	// 取得后一天.
	getNextDay : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth(), pDate.getDate() + 1);
	},

	// 取得前一周.
	getPrevWeek : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth(), pDate.getDate() - 7);
	},
	// 取得后一周.
	getNextWeek : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth(), pDate.getDate() + 7);
	},

	// 取得前一月.
	getPrevMonth : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth() - 1, pDate.getDate());
	},
	// 取得后一月.
	getNextMonth : function (pDate) {
		return new Date(pDate.getFullYear(), pDate.getMonth() + 1, pDate.getDate());
	},



	// ########## 画面处理相关函数. ##########
	dayClassArray : ["Holiday", "Workday", "Workday", "Workday", "Workday", "Workday", "Holiday"],

	getDayCss : function (pDate, pNeedCheckToday) {
		// 预期结果.
		var result = this.dayClassArray[pDate.getDay()];
		// 如果还要额外检查今天.
		if (pNeedCheckToday == true) {
			var vToday = new Date();
			if (this.getShortDateString(vToday) == this.getShortDateString(pDate)) {
				result = result + " Today";
			}
		}
		return result;
	},






	// ########## 外部调用相关函数. ##########


	// 处理日期.
	processDate : new Date(),


	// 初始化月份视图.
	initMonthView(objectItem) {
		var detailData = new Array();
		detailData.push("<ul class='myCalendarTitle'>");
		detailData.push("<li><button type='button' class='myCalendarPrevButton' onclick='myCalendar.showPrevMonthData()' > &lt;&lt; </button></li>");
		detailData.push("<li class='myCalendarYearMonth'></li>");
		detailData.push("<li><button type='button' class='myCalendarNextButton' onclick='myCalendar.showNextMonthData()'> &gt;&gt; </button></li>");
		detailData.push("</ul>");
		detailData.push("<div class='myCalendarContent'>");
		detailData.push("</div>");
		var detailHtml = detailData.join("");
		objectItem.html(detailHtml);
		var content = $(".myCalendarContent");
		this.showMonthData(content);
		this.showCalendarYearMonth();
	},

	// 显示年月.
	showCalendarYearMonth : function() {
		$(".myCalendarYearMonth").html("" + this.processDate.getFullYear() + "年" + (this.processDate.getMonth() + 1) + "月");
	},

	// 显示上月数据.
	showPrevMonthData : function() {
		this.processDate = this.getPrevMonth(this.processDate);
		this.showCalendarYearMonth();
		var content = $(".myCalendarContent");
		this.showMonthData(content);
	},

	// 显示次月数据.
	showNextMonthData : function() {
		this.processDate = this.getNextMonth(this.processDate);
		this.showCalendarYearMonth();
		var content = $(".myCalendarContent");
		this.showMonthData(content);
	},



	// 需要额外显示的信息.
	withExpInfo : null,

	// 需要额外处理的事件.
	withExpEventFunc : function(){
	},

	// 显示月份数据.
	showMonthData : function(objectItem) {
		// 先清空数据.
		objectItem.empty();

		// 取得本月第一天.
		var vFirstDay = this.getMonthFirstDay(this.processDate);
		// 取得本月最后一天.
		var vLastDay = this.getMonthLastDay(this.processDate);

		// 取得 本月第一天那一周的第一天. (周日.)
		var vFirstDayFirstWeek = this.getWeekFirstDay(vFirstDay, 0);
		// 取得 本月最后一天那一周最后一天. (周六.)
		var vLastDayLastWeek = this.getWeekLastDay(vLastDay, 6);

		// 先增加标题.
		var title = "<ul class='myCalendar'>";
		for(var i = 0; i < 7; i ++) {
			title = title + "<li data-week='" + i + "' class='Title " +  this.dayClassArray[i] + "'>" + this.displayWeekText[i] ;

			if(this.withExpInfo != null && this.withExpInfo != "") {
				title = title + this.withExpInfo;
			}

			title = title + "</li>";
		}
		title = title + "</ul>"
		objectItem.append(title);

		// 列索引.
		var vColIndex = 0;
		// 行数据.
		var oneLine;
		for (var vProcessDate = vFirstDayFirstWeek; vProcessDate <= vLastDayLastWeek; vProcessDate = new Date(vProcessDate.getFullYear(), vProcessDate.getMonth(), vProcessDate.getDate() + 1)) {
			if(vColIndex == 0) {
				oneLine = "<ul class='myCalendar'>";
			}

			oneLine = oneLine + "<li data-week='" + vColIndex + "' data-date='" + vProcessDate.getDate() + "' class='myCalendarData ";

			if (vProcessDate >= vFirstDay && vProcessDate <= vLastDay) {
				oneLine = oneLine + this.getDayCss(vProcessDate, true);
			} else {
				oneLine = oneLine + "OtherMonthData";
			}

			oneLine = oneLine + "'>" + vProcessDate.getDate();

			if(this.withExpInfo != null && this.withExpInfo != "") {
				oneLine = oneLine + this.withExpInfo;
			}

			oneLine = oneLine + "</li>";

			vColIndex++;
			if(vColIndex == 7) {
				oneLine = oneLine + "</ul>";
				objectItem.append(oneLine);
				// 换行.
				vColIndex = 0;
			}
		}

		// 需要额外处理的事件.
		this.withExpEventFunc();
	}

}