/*
 * assemble-example-readme
 * http://assemble.github.com/assemble-example-readme
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg      : grunt.file.readJSON('package.json'),
    changelog: grunt.file.readYAML('CHANGELOG'),

    assemble: {
      options: {
        helpers: '<%= pkg.helpers.handlebars %>',
        assets:  'dist'
      },
      readme: {
        options: {
          changelog: '<%= changelog %>',
          layout:    'src/layout.hbs',
          partials:  'src/docs/*.hbs',
          data:     ['package.json'],
          ext: '.md'
        },
        files: {
          '.': ['src/README.hbs']
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task to be run.
  grunt.registerTask('default', [
    'assemble'
  ]);
};

