/* 报表类型选择 */
class ReportTypeSelect extends React.Component {
  render() {
    return <div>
      <span> 报表类型 </span>
      <select name="reportTypeSelect" onChange={this.props.handleReportTypeSelectOptionChange} value={this.props.reportTypeSelect}>
        <option value="1">日报</option>
        <option value="7">周报</option>
        <option value="30">月报</option>
      </select>
    </div>;
  }
}

/* 日选择 */
class DaySelect extends React.Component {
  render() {
    // 报表日期类型.
    let reportDateType = this.props.reportDateType;
    if(reportDateType == 1) {
      return <div>
        <span> 日期选择 </span>
        <select name="daySelect" onChange={this.props.handleDaySelectOptionChange} value={this.props.daySelect}>
          <option value="1">每天处理</option>
          <option value="5">仅在周一到周五处理</option>
          <option value="7">仅在周六与周日处理</option>
        </select>
      </div>;
    } else {
      return <div></div>;
    }
  }
}

/* 周选择 */
class WeekSelect extends React.Component {
  render() {
    // 报表日期类型.
    let reportDateType = this.props.reportDateType;
    if(reportDateType == 7) {
      return <div>
        <span> 星期选择 </span>
        <select name="weekSelect" onChange={this.props.handleWeekSelectOptionChange} value={this.props.weekSelect}>
          <option value="1">星期一</option>
          <option value="2">星期二</option>
          <option value="3">星期三</option>
          <option value="4">星期四</option>
          <option value="5">星期五</option>
          <option value="6">星期六</option>
          <option value="7">星期天</option>
        </select>
      </div>;
    } else {
      return <div></div>;
    }
  }
}

/* 月选择 */
class MonthSelect extends React.Component {
  render() {
    // 报表日期类型.
    let reportDateType = this.props.reportDateType;
    if(reportDateType == 30) {
      return <div>
        <span> 每月的 </span>
        <select name="monthSelect" onChange={this.props.handleMonthSelectChange} value={this.props.monthSelect}>
          <option value="1">1日</option>
          <option value="2">2日</option>
          <option value="3">3日</option>
          <option value="4">4日</option>
          <option value="5">5日</option>
          <option value="6">6日</option>
          <option value="7">7日</option>
          <option value="8">8日</option>
          <option value="9">9日</option>
          <option value="10">10日</option>
          <option value="11">11日</option>
          <option value="12">12日</option>
          <option value="13">13日</option>
          <option value="14">14日</option>
          <option value="15">15日</option>
          <option value="16">16日</option>
          <option value="17">17日</option>
          <option value="18">18日</option>
          <option value="19">19日</option>
          <option value="20">20日</option>
          <option value="21">21日</option>
          <option value="22">22日</option>
          <option value="23">23日</option>
          <option value="24">24日</option>
          <option value="25">25日</option>
          <option value="26">26日</option>
          <option value="27">27日</option>
          <option value="28">28日</option>
          <option value="29">29日</option>
          <option value="30">30日</option>
          <option value="31">31日</option>
          <option value="99">最后一天</option>
        </select>
      </div>;
    } else {
      return <div></div>;
    }
  }
}




/* 总的处理 */
class ReportApp extends React.Component {

    constructor(props) {
        super(props);

        // 注意：如果不写这句，将导致事件执行的时候，拿不到 this ，而导致异常结束.
        this.handleReportTypeSelectChange = this.handleReportTypeSelectChange.bind(this);
        this.handleReportValueSelectChange = this.handleReportValueSelectChange.bind(this);

        // 初始的状态值.
        this.state = { reportTypeSelect: 1,   reportValueSelect: 0 };
    }

	// 类型选择的事件处理.
    handleReportTypeSelectChange(event) {
        // 修改状态值.
        this.setState({
            reportTypeSelect: event.target.value,
            reportValueSelect: 0
        });
    }

	// 值选择的事件处理.
    handleReportValueSelectChange(event) {
        // 修改状态值.
        this.setState({
            reportValueSelect: event.target.value
        });
    }

    render() {
        // 报表类型.
        let reportTypeSelect = this.state.reportTypeSelect;
        // 报表日期值.
        let reportValueSelect = this.state.reportValueSelect;

        return <div>
            <h3> 报表处理 </h3>
            <ReportTypeSelect handleReportTypeSelectOptionChange={this.handleReportTypeSelectChange} reportTypeSelect={reportTypeSelect}/>

            <DaySelect reportDateType={reportTypeSelect} daySelect={reportValueSelect} handleDaySelectOptionChange={this.handleReportValueSelectChange} />
            <WeekSelect reportDateType={reportTypeSelect} weekSelect={reportValueSelect} handleWeekSelectOptionChange={this.handleReportValueSelectChange} />
            <MonthSelect reportDateType={reportTypeSelect} monthSelect={reportValueSelect} handleMonthSelectChange={this.handleReportValueSelectChange} />
        </div>;
    }
}



ReactDOM.render(
    <ReportApp />,
    document.getElementById('root')
);

