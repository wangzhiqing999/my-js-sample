
/* 报表数据. */
function Report(reportCode,reportName) {
	this.reportCode = reportCode;
	this.reportName = reportName;
}


/* 报表明细. */
var ReportDetail = React.createClass({
	render: function() {
		return (
			<li>
				<span>{this.props.report.reportCode} </span>
				<span>{this.props.report.reportName} </span>
				<button onClick={this.props.editReport} value={this.props.reportIndex}> 编辑 </button>
				<button onClick={this.props.removeReport} value={this.props.reportIndex}> 移除 </button>
			</li>
		);
	}
});

/* 报表列表. */
var ReportList = React.createClass({
	render: function() {
		var reportIndex = 0;
		var _self = this;
		return (
			<ol>
			{
				this.props.reportList.map(function (report) {
					reportIndex ++;
					return <ReportDetail report={report} reportIndex={reportIndex} removeReport={_self.props.removeReport} editReport={_self.props.editReport} />
				})
			}
			</ol>
		);
	}
});



/* 新增处理. */
var NewReport = React.createClass({
	render: function() {
		var isNewReportMode = this.props.newReportMode;
		if(isNewReportMode) {
			return (
				<p>
					报表代码：<input type="text" value={this.props.newReportCode} onChange={this.props.handleReportCodeChange}/>
					<br/>
					报表名称：<input type="text" value={this.props.newReportName} onChange={this.props.handleReportNameChange}/>
					<br/>
					<button onClick = {this.props.handleAdd}> 追加 </button>
				</p>

			);
		} else {
			return (<p></p>);
		}
	}
});


/* 编辑处理. */
var EditReport = React.createClass({
	render: function() {
		var isEditReportMode = this.props.editReportMode;
		if(isEditReportMode) {
			return (
				<p>
					报表名称：<input type="text" value={this.props.editReportName} onChange={this.props.handleReportNameChange}/>
					<br/>
					<button onClick = {this.props.handleEdit}> 保存 </button>
				</p>

			);
		} else {
			return (<p></p>);
		}
	}
});





/* 报表App. */
var ReportApp = React.createClass({
	// 初始化变量.
	getInitialState: function() {
		return {
			// 报表列表.
			reportList: [new Report("1", "测试初始数据1"), new Report("2", "测试初始数据2")],
			// 新增的报表信息.
			newReportCode: "",
			newReportName: "",

			// 编辑的索引.
			editIndex: -1,
			editReportName: "",

			// 错误提示信息.
			errorMessage: "",

			newReportMode: true
		};
	},

	// 修改文字变更.
	handleReportCodeChange: function(event) {
		// 修改状态值.
		this.setState({newReportCode: event.target.value});
	},
	handleReportNameChange: function(event) {
		// 修改状态值.
		this.setState({newReportName: event.target.value});
	},
	// 处理追加.
	handleAdd: function(event) {
		var newReportCode = this.state.newReportCode;
		var newReportName = this.state.newReportName;
		var reportList = this.state.reportList;
		if(newReportCode === "") {
			this.setState({errorMessage: "报表代码不能为空."});
			return;
		}
		if(newReportName === "") {
			this.setState({errorMessage: "报表名称不能为空."});
			return;
		}
		var newReport = new Report(newReportCode, newReportName);
		reportList.push(newReport);
		this.setState({reportList: reportList, newReportCode: "", newReportName: "", errorMessage: ""});
	},


	handleEditReportNameChange: function(event) {
		// 修改状态值.
		this.setState({editReportName: event.target.value});
	},

	// 处理删除.
	handleRemove: function(event) {
		var r=confirm("确认要删除数据么？");
		if(!r) {
			// 用户取消.
			return;
		}
		var removeIndex = event.target.value;
		var reportList = this.state.reportList;
		reportList.splice(removeIndex - 1, 1);
		this.setState({reportList: reportList});
	},
	// 处理编辑.
	handleEdit: function(event) {
		var editIndex = event.target.value;
		var reportList = this.state.reportList;
		var reportItem = reportList[editIndex - 1];

		// console.log("#handleEdit ", editIndex, reportItem);

		this.setState({editIndex: editIndex,  editReportName: reportItem.reportName, newReportMode: false });
	},
	// 编辑完成.
	handleEditFinish: function(event) {
		var editIndex = this.state.editIndex;
		var editReportName = this.state.editReportName;
		var reportList = this.state.reportList;
		if(editReportName === "") {
			this.setState({errorMessage: "报表名称不能为空."});
			return;
		}
		var reportItem = reportList[editIndex - 1];
		reportItem.reportName = editReportName;
		this.setState({reportList: reportList, editIndex: -1, editReportName: "", errorMessage: "", newReportMode: true });
	},
	render: function() {
		// 获取初始值.
		var reportList = this.state.reportList;

		var newReportCode = this.state.newReportCode;
		var newReportName = this.state.newReportName;

		var editIndex = this.state.editIndex;
		var editReportName = this.state.editReportName;

		var newReportMode = this.state.newReportMode;
		var editReportMode = !newReportMode;

		var errorMessage = this.state.errorMessage;

		return (
			<div>
				<h3>报表管理</h3>
				<ReportList reportList={reportList} removeReport={this.handleRemove} editReport={this.handleEdit}  />

				<NewReport newReportMode={newReportMode}
					newReportCode={newReportCode} newReportName={newReportName}
					handleAdd={this.handleAdd} handleReportCodeChange={this.handleReportCodeChange} handleReportNameChange={this.handleReportNameChange} />

				<EditReport editReportMode={editReportMode}
					editReportName={editReportName}
					handleEdit={this.handleEditFinish}  handleReportNameChange={this.handleEditReportNameChange} />

				<p> {errorMessage} </p>
			</div>
		);
	}
});



ReactDOM.render(
	<ReportApp />,
	document.getElementById('root')
);

