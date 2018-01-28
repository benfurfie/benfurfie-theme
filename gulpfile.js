var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var postcss = require('gulp-postcss');
var webpack = require('webpack-stream');
var cache = require('gulp-cache');

gulp.task('styles', function(){
    var plugins = [
        require('postcss-pixels-to-rem')(),
        require('autoprefixer')({ browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  })
    ];
    return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css'))
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./js'));
});

// Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
      .pipe(cache(imagemin({
        optimisationLevel: 3,
        progressive: true,
        interlaced: true
      })))
      .pipe(gulp.dest('images'));
  });

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', ['styles']);
    gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('default', [ 'styles', 'scripts', 'watch' ]);
