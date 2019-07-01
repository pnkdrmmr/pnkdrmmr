var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var swig = require('gulp-swig');
// var browserSycn = require('gulp-browser-sync');
const browserSync = require('browser-sync').create();


var child = require('child_process');
var gutil = require('gulp-util');

var uglify = require('gulp-uglify-es').default;
let cleanCSS = require('gulp-clean-css');

const siteRoot = '_site';


var cssFiles = [
  '_sass/global/_mixins.scss',
  '_sass/global/_variables.scss',
  '_sass/global/_default.scss',
  '_sass/global/_bourbon/bourbon/*.scss',
  '_sass/global/_fonts-and-colors.scss',
  '_sass/global/_grid.scss',
  '_sass/global/_global.scss',
  '_sass/vendor/_*.scss',
  '_sass/modules/_*.scss',
  '_sass/includes/_*.scss',
  '_sass/templates/_*.scss'
];
var jsFiles = [
  '_js/vendor/jquery.js',
  '_js/vendor/modernizer.js',
  '_js/vendor/bxslider.js',
  '_js/vendor/lightbox.js',
  '_js/vendor/audio.js',
  '_js/vendor/velocity.js',
  '_js/vendor/typed.js',
  '_js/vendor/match-height.js',
  '_js/vendor/setFixed.js',
  '_js/main.js'
];




gulp.task('jekyll', () => {
  var jekyll = child.spawn('jekyll', ['build',
    '--watch',
    '--incremental',
    '--drafts'
  ]);
  var jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('css', () => {
  gulp.src(cssFiles)
    .pipe(concat('style.css'))
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(swig({defaults: { cache: false }}))
    .pipe(gulp.dest('css'))
});


// Prepares the JS file
gulp.task('js', function() {
    gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('js'));
});


// gulp.task('watch', () => {
//   gulp.watch(cssFiles, ['css']);
//   gulp.watch(jsFiles, ['js']);
//   gulp.watch(['jekyll']);
// });

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css']);
  gulp.watch(jsFiles, ['js']);
  gulp.watch(['jekyll']);
});


gulp.task('default', ['css','js', 'jekyll', 'serve']);



