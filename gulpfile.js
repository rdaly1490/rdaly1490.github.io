var gulp = require('gulp');
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");

gulp.task("images", function() {
	console.log("works");
	return gulp.src("./images/**/*")
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest("./prod/images"));
});

gulp.task("js-uglify-materialize", function() {
	return gulp.src("./scripts/materialize.js")
	.pipe(uglify())
    .pipe(gulp.dest('./prod/scripts'));
});

gulp.task("js-uglify-main", function() {
	return gulp.src("./scripts/main.js")
	.pipe(uglify())
    .pipe(gulp.dest('./prod/scripts'));
});

gulp.task("css-uglify-stylesheet", function() {
	return gulp.src("./css/style.css")
	.pipe(minifyCss())
    .pipe(gulp.dest('./prod/css'));
});

gulp.task("build", ["js-uglify-materialize", "js-uglify-main", "css-uglify-stylesheet", "images"]);