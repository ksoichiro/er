var gulp = require('gulp');
var electronServer = require('electron-connect').server;
var $ = require('gulp-load-plugins')();
var del = require('del');

var srcDir = 'src';
var serveDir = '.serve';
var distDir = 'dist';
var babelOptions = {presets: ["react", "es2015", "stage-0"]};

gulp.task('compile:styles', function () {
  return gulp.src(srcDir + '/styles/**/*.less')
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(serveDir + '/styles'))
    ;
});

gulp.task('compile:styles:watch', function (done) {
  gulp.src(srcDir + '/styles/**/*.less')
    .pipe($.watch(srcDir + '/styles/**/*.less', {verbose: true}))
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.less())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(serveDir))
  ;
  done();
});

gulp.task('compile:html', ['compile:styles'], function() {
  return gulp.src(srcDir + '/renderer/**/*.html')
    .pipe($.inject(
      gulp.src([
        './node_modules/semantic-ui-css/semantic.min.css',
        './node_modules/semantic-ui-css/semantic.min.js',
        serveDir + '/styles/**/*.css'
      ]), {
      relative: true,
      ignorePath: ['../../' + serveDir, '..'],
      addPrefix: '..'
    }))
    .pipe(gulp.dest(serveDir))
  ;
});

gulp.task('compile:html:watch', ['compile:styles'], function(done) {
  gulp.src(srcDir + '/renderer/**/*.html')
    .pipe($.watch(srcDir + '/renderer/**/*.html', {verbose: true}))
    .pipe($.plumber())
    .pipe($.inject(
      gulp.src([
        './node_modules/semantic-ui-css/semantic.min.css',
        './node_modules/semantic-ui-css/semantic.min.js',
        serveDir + '/styles/**/*.css'
      ]), {
      relative: true,
      ignorePath: ['../../' + serveDir, '..'],
      addPrefix: '..'
    }))
    .pipe(gulp.dest(serveDir + '/renderer'))
  ;
  done();
});

gulp.task('dist:html', ['compile:html'], function () {
  return gulp.src([serveDir + '/renderer/**/*.html', serveDir + '/styles/**/*.css'])
    .pipe($.if('*.css', $.cssnano()))
    .pipe($.useref({searchPath: [serveDir + '/styles']}))
    .pipe(gulp.dest(distDir + '/renderer'))
  ;
});

gulp.task('compile:scripts', function () {
  return gulp.src(srcDir + '/**/*.{js,jsx}')
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptions))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(serveDir))
  ;
});

gulp.task('compile:scripts:watch', function (done) {
  gulp.src(srcDir + '/**/*.{js,jsx}')
    .pipe($.watch(srcDir + '/**/*.{js,jsx}', {verbose: true}))
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelOptions))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(serveDir))
  ;
  done();
});

gulp.task('clean', function (done) {
  del([serveDir, distDir], function () {
    done();
  });
});

gulp.task('serve', ['compile:styles:watch', 'compile:html:watch', 'compile:scripts:watch'], function () {
  var electron = electronServer.create();
  electron.start();
  gulp.watch([serveDir + '/app.js', serveDir + '/browser/**/*.js'], electron.restart);
  gulp.watch([serveDir + '/styles/**/*.css', serveDir + '/renderer/**/*.{html,js}'], electron.reload);
});

gulp.task('build', ['compile:html', 'compile:scripts']);
gulp.task('dist', ['dist:html']);
