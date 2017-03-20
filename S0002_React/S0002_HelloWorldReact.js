
// ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。
ReactDOM.render(
	<h1>Hello, world!  代码在 .js 文件里！</h1>,
	document.getElementById('root')
);

ReactDOM.render(
	<div>
		<h1>JSX</h1>
		<p> React 使用 JSX 来替代常规的 JavaScript。 </p>
		<p>  代码在 .js 文件里！</p>
	</div>
	,
	document.getElementById('test')
);