var gulp = require('gulp');
var nodeDebug = require('gulp-node-debug');
var supervisor = require( "gulp-supervisor" );
var exec = require('child_process').exec;

var indexFileName = 'index.js';

gulp.task('start-mongo', function () {
    exec('cd server/mongodb/bin/; ./mongod;', function () {
        console.log('Hello');
    });
});

gulp.task('debug', function () {
    gulp.src([indexFileName])
        .pipe(nodeDebug({
            debugPort: 5858,
            webHost: '0.0.0.0',
            webPort: 4002
        }));
});

gulp.task('supervisor-simple', function() {
    supervisor(indexFileName, {
        debug: true
    } );
});

gulp.task('server', ['supervisor-simple', 'debug']);