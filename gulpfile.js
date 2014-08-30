var gulp = require("gulp");


gulp.task('sass', function (cb) {
    var sass = require("gulp-sass");

    gulp.src("./src/sass/**/*.scss")
        .pipe(sass({sourceComments: 'none'}))
        .pipe(gulp.dest("./www/assets"))

    cb();
});


gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');

    return gulp.src('./www/assets/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss( [autoprefixer] ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./www/assets'));
});


gulp.task("css", ["sass", "autoprefixer"]);

gulp.task("watch", function() {
    gulp.watch("./src/sass/**/*.scss", ["sass"]);
});