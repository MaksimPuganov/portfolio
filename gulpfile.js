"use strict";

var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    spritesmith = require('gulp.spritesmith'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer');

//Генерация спрайтов из картинок

gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/icon/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('app/sprites/'));
});


gulp.task('default', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(concatCss("app/css/common.css"))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css/'));
});

// Запуск сервера Browser-sync
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

//Слежка
gulp.task('watch', function() {
    gulp.watch ([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css',
    ]).on('change', browserSync.reload);
});

//Задача по-умолчанию
gulp.task('default', ['server', 'watch']);
