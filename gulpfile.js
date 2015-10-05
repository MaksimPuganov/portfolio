'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    // spritesmith = require('gulp.spritesmith'),
    concatCss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer');

//Генерация спрайтов из картинок
// gulp.task('sprite', function () {
//   var spriteData = gulp.src('app/img/icon/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     cssName: 'sprite.css'
//   }));
//   return spriteData.pipe(gulp.dest('app/sprites/'));
// });


gulp.task('concat', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(concatCss("common.css"))
        .pipe(autoprefixer({
            browsers:  ['> 1%', 'ie 6-8','last 15 version']
        }))
        .pipe(gulp.dest('dist'));
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
