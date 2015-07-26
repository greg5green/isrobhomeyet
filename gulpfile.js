var babelify = require('babelify');
var browserify = require('browserify');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');

var options = {
  buildFolder: './build/',
  index: './src/index.html',
  scriptInput: './src/app.js',
  scriptOutput: 'app.js',
  watchedFiles: ['./src/**/*']
};

gulp.task('browser-sync', function() {
  browserSync({ server: { baseDir: options.buildFolder } });
});

gulp.task('compile', function() {
  var b = browserify();
  b.transform(babelify);
  b.add(options.scriptInput);

  return b
    .bundle()
    .pipe(source(options.scriptInput))
    .pipe(rename(options.scriptOutput))
    .pipe(gulp.dest(options.buildFolder));
});

gulp.task('default', ['browser-sync', 'compile', 'index'],function() {
  gulp.watch(options.watchedFiles, ['compile', 'index', browserSync.reload]);
});

gulp.task('index', function() {
  gulp
    .src(options.index)
    .pipe(gulp.dest(options.buildFolder));
});
