var _gulp   = require('gulp');
var _browserSync= require('browser-sync').create();
var _gulpsass   = require('gulp-sass');
var _browserify = require('browserify');
var _uglify     = require('gulp-uglify');

var _projectOptions = {
    source: './src',
    indexFile : 'index.html',
    devPort: 9001,
    nodeModules: './node_modules',
    bowerModules: './bower_components'
};
//-s -f src --no-notify --no-ui
var _browserSyncOptions = {
    notify : true,
    server: {
        baseDir: _projectOptions.source,
        index: _projectOptions.indexFile,
        routes: {
        "/bower_components": _projectOptions.bowerModules,
        "/node_modules": _projectOptions.nodeModules
        }
    }
}
// process JS files and return the stream.
_gulp.task('js', function () {
    return _gulp.src('js/*js')
        .pipe(_browserify())
        .pipe(_uglify())
        .pipe(_gulp.dest('dist/js'));
});
// Compile sass into CSS & auto-inject into browsers
_gulp.task('sass', function() {
    return _gulp.src("src/scss/*.scss")
        .pipe(_gulpsass())
        .pipe(_gulp.dest("src/css"))
        .pipe(_browserSync.stream());
});

// create a task that ensures the `js` task is complete before
// reloading browsers
_gulp.task('script-watch', _gulp.series('js'), function (done) {
    _browserSync.reload();
    done();
});
_gulp.task('style-watch', _gulp.series('sass'), function (done) {
    _browserSync.reload();
    done();
});
_gulp.task('template-watch', function (done) {
    _browserSync.reload();
    done();
});

_gulp.task('serve', _gulp.series('js', 'sass'), function() {
    _browserSync.init(_browserSyncOptions);

    _gulp.watch("src/*.scss", _gulp.series('style-watch'));
    _gulp.watch("src/*.sass", _gulp.series('style-watch'));
    _gulp.watch("src/*.js", _gulp.series('script-watch'));
    _gulp.watch("src/*.html", _gulp.series('template-watch'));
    _gulp.watch("*.html", _gulp.series('template-watch'));
});

_gulp.task('default', _gulp.series('serve'));