var gulp = require("gulp");


gulp.task('sass', function () {
    var sass = require("gulp-sass");
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');
    var processors = [
        autoprefixer({ browsers: ['> 1%', 'IE 9'] })
    ];

    gulp.src("./src/sass/**/*.scss")
        .pipe(sass({sourceComments: 'none'}))
        .pipe(sourcemaps.init())
            .pipe(postcss( processors ))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./www/assets'));

});

gulp.task("css", ["sass"]);

gulp.task("watch", function() {
    gulp.watch("./src/sass/**/*.scss", ["sass"]);
});