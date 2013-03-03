# assemble-example-readme

> Assemble example project, demonstrates how to build a README.md file from templates and YAML or JSON. Inspired by grunt-contrib-internal.



## Getting Started
This plugin requires Grunt `0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install assemble --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('assemble');
```

## assemble task
_Run this task with the `grunt assemble` command._

## Overview

This probably isn't practical for small projects, but it can be useful if you manage a number of related projects and you want to synchronize common metadata, author, links and so on.

Here is the entire configuration

``` js
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg      : grunt.file.readJSON('package.json'),
    changelog: grunt.file.readYAML('CHANGELOG'),

    assemble: {
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
```

## Options
In ullamcorper turpis ac enim suscipit et rhoncus leo molestie. Mauris interdum pulvinar sodales. In molestie tempus tellus eu vulputate. Sed eget risus purus. Phasellus tempus diam vel dui commodo sagittis. Nullam eu dolor orci, ac dignissim ligula. Quisque turpis elit, tempor id elementum sed, viverra eget risus. Mauris fermentum tincidunt tellus, ut lobortis dui suscipit in.


## Examples

## Release History
 * 2013-03-02    v0.1.2    Changelog templates now add history to README 
 * 2013-03-01    v0.1.1    Adds README example. Uses templates/data and partials for sections. 
 * 2013-02-28    v0.1.0    First commit. 



---
Authored by [Jon Schlinkert](http://github.com/jonschlinkert)

_This file was generated on Sat Mar 02 2013 01:25:47._
