describe("myCalendar Test Part 1.", function() {

	beforeEach(function() {
		// 在describe函数中每个Spec执行之前执行。
	});
	afterEach(function() {
		// 在describe函数中每个Spec数执行之后执行。
	});
	beforeEach(function() {
		// 在describe函数中所有的Specs执行之前执行，但只执行一次，在Sepc之间并不会被执行。
	});
	beforeEach(function() {
		// 在describe函数中所有的Specs执行之后执行，但只执行一次，在Sepc之间并不会被执行。
	});



	// getYmdDateString
	it("getShortDateString first day.", function() {
		// 测试年度的第一天.
		var result = myCalendar.getShortDateString( new Date(2017,0,1) );
		expect(result).toBe('2017-01-01');
	});
	it("getShortDateString last day.", function() {
		// 测试年度的最后一天.
		var result = myCalendar.getShortDateString( new Date(2017,11,31) );
		expect(result).toBe('2017-12-31');
	});



	// getYmdDateString
	it("getYmdDateString first day.", function() {
		// 测试年度的第一天.
		var result = myCalendar.getYmdDateString( new Date(2017,0,1) );
		expect(result).toBe('20170101');
	});
	it("getYmdDateString last day.", function() {
		// 测试年度的最后一天.
		var result = myCalendar.getYmdDateString( new Date(2017,11,31) );
		expect(result).toBe('20171231');
	});



	// getWeekFirstDay
	it("getWeekFirstDay 2017-06-01", function() {
		// 测试 2017-06-01 这周的第一天 （周日为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,1), 0);
		expect(result).toEqual( new Date(2017, 4, 28) );
		// 测试 2017-06-01 这周的第一天 （周一为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,1), 1);
		expect(result).toEqual( new Date(2017, 4, 29) );
	});
	it("getWeekFirstDay 2017-06-04", function() {
		// 测试 2017-06-04 这周的第一天 （周日为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,4), 0);
		expect(result).toEqual( new Date(2017, 5, 4) );
		// 测试 2017-06-04 这周的第一天 （周一为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,4), 1);
		expect(result).toEqual( new Date(2017, 4, 29) );
	});
	it("getWeekFirstDay 2017-06-05", function() {
		// 测试 2017-06-05 这周的第一天 （周日为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,5), 0);
		expect(result).toEqual( new Date(2017, 5, 4) );
		// 测试 2017-06-05 这周的第一天 （周一为首日）.
		var result = myCalendar.getWeekFirstDay( new Date(2017,5,5), 1);
		expect(result).toEqual( new Date(2017, 5, 5) );
	});



	// getWeekLastDay
	it("getWeekLastDay 2017-06-01", function() {
		// 测试 2017-06-01 这周的最后一天 （周日为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,1), 0);
		expect(result).toEqual( new Date(2017, 5, 3) );
		// 测试 2017-06-01 这周的最后一天 （周一为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,1), 1);
		expect(result).toEqual( new Date(2017, 5, 4) );
	});
	it("getWeekLastDay 2017-06-04", function() {
		// 测试 2017-06-04 这周的最后一天 （周日为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,4), 0);
		expect(result).toEqual( new Date(2017, 5, 10) );
		// 测试 2017-06-04 这周的最后一天 （周一为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,4), 1);
		expect(result).toEqual( new Date(2017, 5, 4) );
	});
	it("getWeekLastDay 2017-06-05", function() {
		// 测试 2017-06-05 这周的最后一天 （周日为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,5), 0);
		expect(result).toEqual( new Date(2017, 5, 10) );
		// 测试 2017-06-05 这周的最后一天 （周一为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,5), 1);
		expect(result).toEqual( new Date(2017, 5, 11) );
	});
	it("getWeekLastDay 2017-06-29", function() {
		// 测试 2017-06-29 这周的最后一天 （周日为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,29), 0);
		expect(result).toEqual( new Date(2017, 6, 1) );
		// 测试 2017-06-29 这周的最后一天 （周一为首日）.
		var result = myCalendar.getWeekLastDay( new Date(2017,5,29), 1);
		expect(result).toEqual( new Date(2017, 6, 2) );
	});



	// getMonthFirstDay
	it("getMonthFirstDay 2017-06-01", function() {
		// 测试 2017-06-01 这月的第一天.
		var result = myCalendar.getMonthFirstDay( new Date(2017,5,1), 0);
		expect(result).toEqual( new Date(2017, 5, 1) );
	});
	it("getMonthFirstDay 2017-06-04", function() {
		// 测试 2017-06-04 这月的第一天.
		var result = myCalendar.getMonthFirstDay( new Date(2017,5,4), 0);
		expect(result).toEqual( new Date(2017, 5, 1) );
	});
	it("getMonthFirstDay 2017-06-30", function() {
		// 测试 2017-06-30 这月的第一天.
		var result = myCalendar.getMonthFirstDay( new Date(2017,5,30), 0);
		expect(result).toEqual( new Date(2017, 5, 1) );
	});



	// getMonthFirstDay
	it("getMonthLastDay 2017-06-01", function() {
		// 测试 2017-06-01 这月的最后一天.
		var result = myCalendar.getMonthLastDay( new Date(2017,5,1), 0);
		expect(result).toEqual( new Date(2017, 5, 30) );
	});
	it("getMonthLastDay 2017-06-04", function() {
		// 测试 2017-06-04 这月的最后一天.
		var result = myCalendar.getMonthLastDay( new Date(2017,5,4), 0);
		expect(result).toEqual( new Date(2017, 5, 30) );
	});
	it("getMonthLastDay 2017-06-30", function() {
		// 测试 2017-06-30 这月的最后一天.
		var result = myCalendar.getMonthLastDay( new Date(2017,5,30), 0);
		expect(result).toEqual( new Date(2017, 5, 30) );
	});
	it("getMonthLastDay 2017-05-31", function() {
		// 测试 2017-05-31 这月的最后一天.
		var result = myCalendar.getMonthLastDay( new Date(2017,4,31), 0);
		expect(result).toEqual( new Date(2017, 4, 31) );
	});

});