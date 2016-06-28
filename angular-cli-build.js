// Angular-CLI build configuration
// This file lists all the node_modules files that will be used in a build
// Also see https://github.com/angular/angular-cli/wiki/3rd-party-libs

/* global require, module */
'use strict';

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
const compileSass = require('broccoli-sass');
const mergeTrees = require('broccoli-merge-trees');
const _ = require('lodash');
const glob = require('glob');

module.exports = function(defaults) {
  let appTree = new Angular2App(defaults, {
    sassCompiler: {
      includePaths: [
        'src/app'
      ]
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(ts|js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'd3/**/*.js',
      'd3-*/**/*.js',
      'moment/**/*.js',
      'symbol-observable/**/*.js'
    ]
  });

  let sass = mergeTrees(_.map(glob.sync('src/**/*.scss'), function(sassFile) {
    sassFile = sassFile.replace('src/', '');
    return compileSass(['src'], sassFile, sassFile.replace(/.scss$/, '.css'));
  }));

  return mergeTrees([appTree, sass], { overwrite: true });
};
