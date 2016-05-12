/* jshint node:true */
'use strict';

// Setup
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// CSS Dependencies
var neat = require('bourbon-neat').includePaths;
var bourbon = require('bourbon').includePaths;
var normalize = require('node-normalize-scss').includePaths;

/**
 * Compile Jade files into HTML
 */
gulp.task('views', function () {
  return gulp.src(['app/**/*.pug', '!app/**/_*.pug', '!app/layouts/*.pug', '!app/_*/*.pug'])
    .pipe($.pug({pretty: true}))
    .pipe(gulp.dest('.tmp'));
});

/**
 * Compile SCSS into stylesheets
 */
gulp.task('styles', function () {
  return gulp.src('app/styles/main.scss')
    .pipe($.plumber())
    .pipe($.sass({
      outputStyle: 'expanded',
      includePaths: [bourbon, neat, normalize]
    }))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe(gulp.dest('.tmp/styles'));
});

/**
 * Validation of JS
 */
gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

/**
 * Asset compilation from compiled HTML
 */
gulp.task('html', ['views', 'styles'], function () {
  var lazypipe = require('lazypipe');
  var cssChannel = lazypipe()
    .pipe($.csso);
  var jsChannel = lazypipe()
    .pipe($.babel, { presets: ['es2015']})
    .pipe($.uglify)
    .pipe(gulp.dest, 'dist');


  var assets = $.useref.assets({searchPath: 'app'});

  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe(assets)
    .pipe($.if('*.js', jsChannel()))
    .pipe($.if('*.css', cssChannel()))
    .pipe(assets.restore())
    .pipe($.useref({searchPath: 'app'}))
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true
    })))
    .pipe(gulp.dest('dist'));
});

/**
 * Minify images
 */
gulp.task('images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'));
});

/**
 * Copy fonts across
 */
gulp.task('fonts', function () {
  return gulp.src('app/fonts/**/*')
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'));
});

/**
 * Extra files from App folder into deployment
 */
gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/*.pug'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

/**
 * Clean deployment directories
 */
gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

/**
 * Livereload
 */
gulp.task('connect', ['styles'], function () {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(require('connect-livereload')({port: 35729}))
    .use(serveStatic('.tmp'))
    .use(serveStatic('app'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

/**
 * Dev server
 */
gulp.task('serve', ['views', 'connect', 'watch'], function () {
  require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect'], function () {
  $.livereload.listen();

  // watch for changes
  gulp.watch([
    'app/*.html',
    '.tmp/**/*.html',
    '.tmp/styles/**/*.css',
    'app/scripts/**/*.js',
    'app/images/**/*'
  ]).on('change', $.livereload.changed);

  gulp.watch(['app/**/*.pug', 'app/_includes/*.md'], ['views']);

  gulp.watch('app/styles/**/*.scss', ['styles']);
});

/**
 * Main build task chain
 */
gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

/**
 * Clean it up
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
