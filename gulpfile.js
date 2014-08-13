
var gulp = require('gulp');

var compass = require('gulp-compass');

gulp.task('default', function() {
    gulp.run('compass');

    gulp.watch([
        './sass/**',
    ], function(event) {
        gulp.run('compass');
    });
});

gulp.task('compass', function() {
    gulp.src('./sass/*.scss')
    .pipe(compass({
        comments: false,
        css: 'css', // css folder
        sass: 'sass' // scss folder
    }));
});

