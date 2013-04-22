/*
 * Assemble, plugin for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    assemble: {
      readme: {
        options: {
          flatten: true,
          pkg: grunt.file.readJSON('package.json'),
          partials: 'src/content/*.hbs',
          data: 'src/data/README.yml',
          ext: ''
        },
        src:  'src/templates/README.md.hbs',
        dest: './'
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task to be run.
  grunt.registerTask('default', ['assemble']);
};
