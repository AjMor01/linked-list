const gulp = require('gulp');
const browserSync = require('browser-sync')
const server = browserSync.create();

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: './src'
        }
    });
    done();
}

function watchFiles() {
    gulp.watch(['./src/*.html', './src/css/*.css', './src/js/*.js'],
    reload);
}

const watch = gulp.parallel(watchFiles, serve)

exports.default = watch;