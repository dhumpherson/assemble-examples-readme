/*
 * assemble-examples/readme
 * http://assemble.github.com/assemble-examples/readme
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    // pkg      : grunt.file.readJSON('package.json'),
    changelog: grunt.file.readYAML('CHANGELOG'),
    repo:      grunt.file.readJSON('src/data/repo.json'),

    assemble: {
      options: {
        helpers: '<%= repo.helpers %>'
      },
      readme: {
        options: {
          // Layouts are optional, so we don't need one, but we'll use one
          // for the example so you can see how they work.
          layout: 'src/layouts/layout.hbs',
          partials: ['src/partials/*.md'],
          data:     ['src/data/*.json', 'package.json'],
          ext: '.md'
        },
        files: {
          '.': ['src/pages/README.hbs']
        }
      },
      changelog: {
        options: {
          changelog: '<%= changelog %>',
          layout: 'src/layouts/layout.hbs',
          partials: ['src/partials/*.md'],
          data:     ['src/data/*.json', 'package.json'],
          ext: '.md'
        },
        files: {
          '.': ['src/pages/README.hbs']
        }
      }
      // readme_advanced: {
      //   options: {
      //     bower: false,
      //     travis: false,
      //     changelog: '<%= changelog %>',
      //     layout: 'src/layouts/layout.hbs',
      //     partials: ['src/partials/*.md'],
      //     data:     ['src/data/*.json'],
      //     ext: '.md'
      //   },
      //   files: {
      //     '.': ['src/pages/README.hbs']
      //   }
      // }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default task to be run.
  grunt.registerTask('default', [
    'assemble:readme'
  ]);

  // Build the basic README
  grunt.registerTask('readme', [
    'assemble:readme'
  ]);

  // Build the README with changelog
  grunt.registerTask('changelog', [
    'assemble:changelog'
  ]);

  // Tests to be run.
  // Placeholder for Travis CI until proper tests are setup.
  grunt.registerTask('test', [
    'default'
  ]);
};

