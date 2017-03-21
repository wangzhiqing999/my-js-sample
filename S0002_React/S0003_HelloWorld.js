
// ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
ReactDOM.render(React.createElement(
	'h1',
	null,
	'Hello, world!  \u4EE3\u7801\u5728 .js \u6587\u4EF6\u91CC\uFF01'
), document.getElementById('root'));

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'JSX'
	),
	React.createElement(
		'p',
		null,
		' React \u4F7F\u7528 JSX \u6765\u66FF\u4EE3\u5E38\u89C4\u7684 JavaScript\u3002 '
	),
	React.createElement(
		'p',
		null,
		'  \u4EE3\u7801\u5728 .js \u6587\u4EF6\u91CC\uFF01'
	)
), document.getElementById('test'));
