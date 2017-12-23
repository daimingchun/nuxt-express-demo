const gulp =  require('gulp');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const minifycss = require('gulp-minify-css')
const $ = gulpLoadPlugins();

const src = {
    css: ['assets/css/**.css'],
    scss: ['assets/css/**.scss'],
    images: ['assets/images/**'],
    fonts: ['assets/fonts/**'],
    js: ['assets/js/**']
}


gulp.task('clean', () => {
    del.sync('static');
});

/**
 * css压缩，加浏览器前缀
 */
gulp.task('css', () => {
    return gulp.src(src.css)
        .pipe($.plumber())
        .pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] }))
        .pipe(minifycss())
        .pipe(gulp.dest('static/css/'))
});

/**
 * scss处理，压缩加前缀
 */
gulp.task('scss', () => {
  return gulp.src(src.scss)
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(minifycss())
    .pipe(gulp.dest('static/css/'))
});

/**
 * 压缩图片
 */
gulp.task('image',() => {
    gulp.src(src.images)
        .pipe($.imagemin({progressive: true}))
        .pipe(gulp.dest('static/images'))
})

/**
 * js暂时不做处理，直接复制到static下
 */
gulp.task('js', () => {
    return gulp.src(src.js)
        .pipe(gulp.dest('static/js'))
});

/**
 * fonts文件不做处理，直接复制到static下
 */
gulp.task('fonts', () => {
    return gulp.src(src.fonts)
        .pipe(gulp.dest('static/fonts'))
});

gulp.task('build', ['clean', 'css', 'scss', 'image', 'js', 'fonts'])