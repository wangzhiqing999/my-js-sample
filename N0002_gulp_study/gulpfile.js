var gulp = require('gulp');


// 使用 gulp-load-plugins 自动加载插件
// 安装：npm install --save-dev gulp-load-plugins
var plugins = require('gulp-load-plugins')();




// 默认任务.
gulp.task('default', ['compile','test','release'], function() {
	console.log("gulp default task.");
});


// ##########  task ：这里是简单测试任务之间的依赖关系的处理. ##########

// 编译任务，没有依赖的需求.
// 参数cb为任务函数提供的回调，用来通知任务已经完成
gulp.task('compile', function(cb) {
	console.log("gulp 编译任务运行中......");
	setTimeout(function(){
		console.log('Compile Done!');
		//执行回调，表示这个异步任务已经完成
		cb();
	}, 1000);
});

// 测试任务，依赖于 编译 任务.
gulp.task('test', ['compile'], function(cb) {
	console.log("gulp 测试任务运行中......");
	setTimeout(function(){
		console.log('Test Done!');
		//执行回调，表示这个异步任务已经完成
		cb();
	}, 1000);
});

// 发布任务，依赖于 编译与测试 任务.
gulp.task('release', ['compile','test'],  function(cb) {
	console.log("gulp 发布任务运行中......");
	setTimeout(function(){
		console.log('Release Done!');
		//执行回调，表示这个异步任务已经完成
		cb();
	}, 1000);
});








// ##########  gulp-rename ：这里是测试 修改文件名的处理. ##########
// 安装：npm install --save-dev gulp-rename
gulp.task('rename', function () {
    gulp.src('js/bootstrap.js')
	.pipe(plugins.uglify())  //使用 uglify 进行压缩.
    .pipe(plugins.rename('bootstrap.min.js')) //会将 bootstrap.js 重命名为 bootstrap.min.js
    .pipe(gulp.dest('dist/js'));
    //关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename
});





// ##########  gulp-uglify ：这里是测试 js文件压缩的处理. ##########
// 安装：npm install --save-dev gulp-uglify
gulp.task('minify-js', function () {
    gulp.src('js/*.js') // 要压缩的js文件
    .pipe(plugins.uglify())  //使用uglify进行压缩.
    .pipe(gulp.dest('dist/js')); //压缩后的路径
});





// ##########  gulp-minify-css ：这里是测试 css 文件压缩的处理. ##########
// 安装：npm install --save-dev gulp-minify-css
gulp.task('minify-css', function () {
    gulp.src('css/*.css') // 要压缩的css文件
    .pipe(plugins.minifyCss()) //压缩css
    .pipe(gulp.dest('dist/css'));
});





// ##########  gulp-minify-html ：这里是测试 html文件压缩. ##########
// 安装：npm install --save-dev gulp-minify-html
gulp.task('minify-html', function () {
    gulp.src('html/*.html') // 要压缩的html文件
    .pipe(plugins.minifyHtml()) //压缩
    .pipe(gulp.dest('dist/html'));
});





// ##########  gulp-jshint ：这里是测试 js代码检查. ##########
// 安装：npm install --save-dev gulp-jshint
// 注：这个在 Windows 系统下安装好像出错了.
gulp.task('jsLint', function () {
    gulp.src('js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter()); // 输出检查结果
});




// ##########  gulp-concat ：这里是测试 文件合并. ##########
// 安装：npm install --save-dev gulp-concat
gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(plugins.concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});






// ##########  gulp-less ：这里是测试 less 的编译. ##########
// 安装：npm install --save-dev gulp-less
gulp.task('compile-less', function () {
    gulp.src('less/*.less')
    .pipe(plugins.less())
    .pipe(gulp.dest('dist/css'));
});





// ##########  gulp-sass ：这里是测试 sass 的编译. ##########
// 安装：npm install --save-dev gulp-sass
// 注：这个在 Windows 系统下安装好像出错了.
gulp.task('compile-sass', function () {
    gulp.src('sass/*.sass')
    .pipe(plugins.sass())
    .pipe(gulp.dest('dist/css'));
});


