// simple
'use strict'

const autoprefixer = require('autoprefixer-stylus')
const babel = require('gulp-babel')
const browserSync = require('browser-sync')
const cssnano = require('gulp-cssnano')
const del = require('del')
const eslint = require('gulp-eslint')
const ghPages = require('gulp-gh-pages')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const jeet = require('jeet')
const koutoSwiss = require('kouto-swiss')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')
const puglint = require('gulp-pug-lint')
const rupture = require('rupture')
const stylint = require('gulp-stylint')
const stylus = require('gulp-stylus')
const svgmin = require('gulp-svgmin')
const uglify = require('gulp-uglify')

const reload = browserSync.reload

gulp.task('stylint', () => {
  gulp.src('./src/assets/styles/*.styl')
    .pipe(stylint())
    .pipe(stylint.reporter())
})

gulp.task('styles', ['stylint'], () => {
  gulp.src('./src/assets/styles/style.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [
        koutoSwiss(),
        jeet(),
        rupture(),
        autoprefixer({
          browsers: ['last 2 versions']
        })
      ],
      compress: true
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(reload({stream: true}))
})

gulp.task('puglint', () => {
  gulp
    .src('./src/**/*.pug')
    .pipe(puglint())
})

gulp.task('pug', ['puglint'], () => {
  gulp
    .src('./src/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}))
})

gulp.task('eslint', () => {
  gulp.src('./src/assets/scripts/**/.js')
    .pipe(eslint())
    .pipe(eslint.format())
})

gulp.task('scripts', ['eslint'], () => {
  gulp.src('./src/assets/scripts/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'))
    .pipe(reload({stream: true}))
})

gulp.task('images', () => {
  gulp.src('./src/assets/images/**/*')
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./dist/assets/img/'))
    .pipe(reload({stream: true}))
})

gulp.task('svg', () => {
  gulp.src('./src/assets/svg/**/*')
    .pipe(svgmin())
    .pipe(gulp.dest('./dist/assets/svg/'))
    .pipe(reload({stream: true}))
})

gulp.task('clear', () => {
  return del('./dist/**/*')
})

gulp.task('watch', () => {
  gulp.watch(['./src/assets/styles/**/*'], ['styles'])
  gulp.watch(['./src/assets/scripts/**/*'], ['scripts'])
  gulp.watch(['./src/assets/images/**/*'], ['images'])
  gulp.watch(['./src/assets/svg/**/*'], ['svg'])
  gulp.watch(['./src/**/*.pug'], ['pug'])
})

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  })
})

gulp.task('pages', () => {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages())
})

gulp.task('build', ['clear'], () => {
  gulp.start('styles', 'pug', 'scripts', 'images', 'svg')
})

gulp.task('default', ['build', 'watch', 'browser-sync'])
gulp.task('deploy', ['build', 'pages'])
