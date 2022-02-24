/**
 * BASE GULP TASKS
 *
 */


/**
 * Require Gulp and common functions
 */

const gulp = require('gulp');
const shell = require('gulp-shell');




/* Run the default task with the '$ gulp' command */

module.exports = function () {

	gulp.task('default', function (done) {
		console.log('Gulp had nothing to do today.');
		done();
	});

};


/* What's the weather like on location? */

gulp.task('weather', shell.task('curl -s http://wttr.in/Bingsjo | head -7'));





