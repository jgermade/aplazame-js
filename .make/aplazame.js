'use strict';

module.exports = function (nitro) {

  nitro.task('aplazame.js', function (target) {
    var dev = target === 'dev';

    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');
    nitro.dir('src')
      .load('aplazame.js', { sourceMap: dev ? 'inline' : false })
      .process('browserify')
      .write('dist')
      .each(function (f) {
        f.filename = f.filename.replace(/\.js$/, '.min.js');
      })
      .process('uglify')
      .write('dist');
  });

  nitro.task('js', function (target) {
    if( target === 'dev' ) {
      nitro.task(['aplazame.js:dev']);
    } else {
      nitro.task(['aplazame.js']);
      nitro.file.copy('dist/aplazame.min.js', 'aplazame.js');
      nitro.file.copy('dist/aplazame.min.js', 'aplazame.min.js');
    }
  });

};
