const gulp = require('gulp')
const change = require('gulp-change')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const minify = require('gulp-terser')
const imagemin = require('gulp-imagemin')
const svgmin = require('gulp-svgmin')
const browserSync = require('browser-sync').create()
const del = require('del')

gulp.task('clear', () => del('dist'))

gulp.task('styles', () =>
  gulp
    .src('src/styles/**/*')
    .pipe(change('dist/css'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
)

gulp.task('scripts', () =>
  gulp
    .src('src/scripts/**/*')
    .pipe(change('dist/js'))
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
)

gulp.task('images', () =>
  gulp
    .src('src/images/**/*')
    .pipe(change('dist/img'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
)

gulp.task('vectors', () =>
  gulp
    .src('src/vectors/**/*')
    .pipe(change('dist/svg'))
    .pipe(svgmin())
    .pipe(gulp.dest('dist/svg/'))
)

gulp.task('pages', () =>
  gulp
    .src('src/pages/*.pug')
    .pipe(change('dist'))
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
)

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })

  gulp.watch('src/styles/**/*', gulp.series(['styles']))
  gulp.watch('src/scripts/**/*', gulp.series(['scripts']))
  gulp.watch('src/images/**/*', gulp.series(['images']))
  gulp.watch('src/vectors/**/*', gulp.series(['vectors']))
  gulp.watch('src/pages/**/*', gulp.series(['pages']))
})

gulp.task(
  'dev',
  gulp.series(
    gulp.parallel('styles', 'scripts', 'images', 'vectors'),
    'pages',
    'server'
  )
)

gulp.task(
  'build',
  gulp.series(
    'clear',
    gulp.parallel('styles', 'scripts', 'images', 'vectors'),
    'pages'
  )
)
