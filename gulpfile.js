var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 3 version', '> 5%'] }),
    ];
    return gulp.src('./src/assets/sass/**/*.scss')
        .pipe($.plumber())
        .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
        .pipe($.postcss(plugins))
        .pipe(gulp.dest('./src/public/css'));
});

gulp.task('babel', () =>
    gulp.src('./src/assets/javascript/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
        presets: ['@babel/env']
    }))
    .pipe($.concat('all.js'))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./src/public/javascript'))
);

gulp.task('watch', function() {
    gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
    gulp.watch('./src/assets/javascript/**/*.js', ['babel']);
});

gulp.task('default', ['sass', 'babel', 'watch'])