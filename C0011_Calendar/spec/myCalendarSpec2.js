describe("myCalendar Test Part 2.", function() {

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



	// 2017-01-01
	it("2017-01-01 all function test.", function() {
		// 测试日期.
		var param = new Date(2017,0,1);

		// 前一天.
		var prevDay = myCalendar.getPrevDay(param);
		expect(prevDay).toEqual( new Date(2016, 11, 31) );

		// 后一天.
		var nextDay = myCalendar.getNextDay(param);
		expect(nextDay).toEqual( new Date(2017, 0, 2) );

		// 前一周.
		var prevWeek = myCalendar.getPrevWeek(param);
		expect(prevWeek).toEqual( new Date(2016, 11, 25) );

		// 后一周.
		var nextWeek = myCalendar.getNextWeek(param);
		expect(nextWeek).toEqual( new Date(2017, 0, 8) );

		// 前一月.
		var prevMonth = myCalendar.getPrevMonth(param);
		expect(prevMonth).toEqual( new Date(2016, 11, 01) );

		// 后一月.
		var nextMonth = myCalendar.getNextMonth(param);
		expect(nextMonth).toEqual( new Date(2017, 1, 1) );
	});



	// 2017-01-31
	it("2017-01-31 all function test.", function() {
		// 测试日期.
		var param = new Date(2017,0,31);

		// 前一天.
		var prevDay = myCalendar.getPrevDay(param);
		expect(prevDay).toEqual( new Date(2017, 0, 30) );

		// 后一天.
		var nextDay = myCalendar.getNextDay(param);
		expect(nextDay).toEqual( new Date(2017, 1, 1) );

		// 前一周.
		var prevWeek = myCalendar.getPrevWeek(param);
		expect(prevWeek).toEqual( new Date(2017, 0, 24) );

		// 后一周.
		var nextWeek = myCalendar.getNextWeek(param);
		expect(nextWeek).toEqual( new Date(2017, 1, 7) );

		// 前一月.
		var prevMonth = myCalendar.getPrevMonth(param);
		expect(prevMonth).toEqual( new Date(2016, 11, 31) );

		// 后一月.
		var nextMonth = myCalendar.getNextMonth(param);
		expect(nextMonth).toEqual( new Date(2017, 1, 28) );
	});



	// 2017-05-31
	it("2017-05-31 all function test.", function() {
		// 测试日期.
		var param = new Date(2017,4,31);

		// 前一天.
		var prevDay = myCalendar.getPrevDay(param);
		expect(prevDay).toEqual( new Date(2017, 4, 30) );

		// 后一天.
		var nextDay = myCalendar.getNextDay(param);
		expect(nextDay).toEqual( new Date(2017, 5, 1) );

		// 前一周.
		var prevWeek = myCalendar.getPrevWeek(param);
		expect(prevWeek).toEqual( new Date(2017, 4, 24) );

		// 后一周.
		var nextWeek = myCalendar.getNextWeek(param);
		expect(nextWeek).toEqual( new Date(2017, 5, 7) );

		// 前一月.
		var prevMonth = myCalendar.getPrevMonth(param);
		expect(prevMonth).toEqual( new Date(2017, 3, 30) );

		// 后一月.
		var nextMonth = myCalendar.getNextMonth(param);
		expect(nextMonth).toEqual( new Date(2017, 5, 30) );
	});



	// 2017-06-30
	it("2017-06-30 all function test.", function() {
		// 测试日期.
		var param = new Date(2017,5,30);

		// 前一天.
		var prevDay = myCalendar.getPrevDay(param);
		expect(prevDay).toEqual( new Date(2017, 5, 29) );

		// 后一天.
		var nextDay = myCalendar.getNextDay(param);
		expect(nextDay).toEqual( new Date(2017, 6, 1) );

		// 前一周.
		var prevWeek = myCalendar.getPrevWeek(param);
		expect(prevWeek).toEqual( new Date(2017, 5, 23) );

		// 后一周.
		var nextWeek = myCalendar.getNextWeek(param);
		expect(nextWeek).toEqual( new Date(2017, 6, 7) );

		// 前一月.
		var prevMonth = myCalendar.getPrevMonth(param);
		expect(prevMonth).toEqual( new Date(2017, 4, 30) );

		// 后一月.
		var nextMonth = myCalendar.getNextMonth(param);
		expect(nextMonth).toEqual( new Date(2017, 6, 30) );
	});


	// 2017-12-31
	it("2017-12-31 all function test.", function() {
		// 测试日期.
		var param = new Date(2017,11,31);

		// 前一天.
		var prevDay = myCalendar.getPrevDay(param);
		expect(prevDay).toEqual( new Date(2017, 11, 30) );

		// 后一天.
		var nextDay = myCalendar.getNextDay(param);
		expect(nextDay).toEqual( new Date(2018, 0, 1) );

		// 前一周.
		var prevWeek = myCalendar.getPrevWeek(param);
		expect(prevWeek).toEqual( new Date(2017, 11, 24) );

		// 后一周.
		var nextWeek = myCalendar.getNextWeek(param);
		expect(nextWeek).toEqual( new Date(2018, 0, 7) );

		// 前一月.
		var prevMonth = myCalendar.getPrevMonth(param);
		expect(prevMonth).toEqual( new Date(2017, 10, 30) );

		// 后一月.
		var nextMonth = myCalendar.getNextMonth(param);
		expect(nextMonth).toEqual( new Date(2018, 0, 31) );
	});

});