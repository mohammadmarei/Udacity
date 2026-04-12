import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task(["npx parcel index.html"]));

gulp.task("test", shell.task(["npx mocha test/shuffle.js"]));

gulp.task("cypress", shell.task(["npx cypress run"]));