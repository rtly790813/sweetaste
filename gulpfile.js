var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 3 version', '> 5%'] }),
    ];
    return gulp.src('./assets/sass/**/*.scss')
        .pipe($.plumber())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.postcss(plugins))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('babel', () =>
    gulp.src('./assets/javascript/**/*.js')
    // .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['@babel/env']
    }))
    // .pipe($.concat('all.js'))
    // .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./public/javascript'))
);

gulp.task('watch', function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./assets/javascript/**/*.js', ['babel']);
});

gulp.task('default', ['sass', 'babel', 'watch'])