var gulp = require('gulp');
var electron = require('electron-connect').server.create();
var $ = require('gulp-load-plugins')();

var srcDir = 'src';
var serveDir = '.serve';
var distDir = 'dist';

gulp.task('compile:styles', function () {
  return gulp.src([srcDir + '/styles/**/*.less'])
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(serveDir + '/styles'))
    ;
});

gulp.task('inject', ['compile:styles'], function() {
  return gulp.src(srcDir + '/**/*.html')
    .pipe($.inject(
      gulp.src([
        './node_modules/semantic-ui-css/semantic.min.css',
        './node_modules/semantic-ui-css/semantic.min.js',
        serveDir + '/styles/**/*.css'
      ]), {
      relative: true,
      ignorePath: ['../../.serve', '..'],
      addPrefix: '..'
    }))
    .pipe(gulp.dest(serveDir))
  ;
});

gulp.task('html', ['inject'], function () {
  var assets = $.useref({searchPath: [serveDir + '/styles']});
  return gulp.src(serveDir + '/renderer/**/*.html')
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.useref())
    .pipe(gulp.dest(distDir + '/renderer'))
  ;
});

gulp.task('compile:scripts', function () {
  return gulp.src('src/**/*.{js,jsx}')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ["react", "es2015", "stage-0"]
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.serve'))
  ;
});

gulp.task('clean', function (done) {
  del([serveDir], function () {
    done();
  });
});

gulp.task('serve', function () {
  electron.start();
  gulp.watch(['.serve/app.js', '.serve/browser/**/*.js'], electron.restart);
  gulp.watch(['.serve/styles/**/*.css', '.serve/renderer/**/*.{html,js}'], electron.reload);
});

gulp.task('build', ['html', 'compile:scripts']);
