'use strict';

module.exports = function (nitro) {

  nitro.task('lint', function () {
      nitro.load('src/{,**/}*.js').process('eslint');
      nitro.load('tests/{,**/}*.js').process('eslint');
  });

};
