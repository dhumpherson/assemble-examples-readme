/*
 * assemble-readme
 * http://assemble.github.com/assemble-readme
 *
 * Copyright (c) 2013 Assemble
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
      // Build README from templates and YAML or JSON
      readme: {
        options: {
          layout:   'src/templates/layouts/layout.hbs',
          partials: 'src/templates/partials/*.hbs',
          data:     ['package.json'],
          ext: ''
        },
        files: {
          '.': [ 'src/templates/pages/readme.md.hbs' ]
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

