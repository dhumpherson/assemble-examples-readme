/*
 * assemble-readme
 * http://assemble.github.com/assemble-readme
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */

module.exports = function(grunt) {

  'use strict';

  var changelog = grunt.file.readYAML('CHANGELOG');

  // Project configuration.
  grunt.initConfig({
    pkg      : grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        helpers: '<%= pkg.helpers.handlebars %>',
        assets:  'dist',
        changelog: changelog
      },
      readme: {
        options: {
          layout:   'src/layouts/readme-layout.hbs',
          partials: 'docs/*.hbs',
          data:     ['package.json'],
          ext: '.md'
        },
        files: {
          '.': [ 'src/pages/README.hbs' ]
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

