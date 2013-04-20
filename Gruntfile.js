/*
 * Assemble, plugin for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // The 'assemble' task
    assemble: {
      options: {
        flatten: true,
        pkg: grunt.file.readJSON('package.json'),
        partials: 'src/content/*.hbs',
        data: 'src/data/readme.yml',
        ext: ''
      },
      readme: {
        files: {
          './': ['src/templates/README.md.hbs']
        }
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task to be run.
  grunt.registerTask('default', ['assemble']);
};
