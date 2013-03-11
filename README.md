# assemble-example-readme

> Assemble example project, demonstrates how to build a README.md file from templates and YAML or JSON. Inspired by grunt-contrib-internal.



## Getting Started
This plugin requires Grunt `0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:


## Quick start
Two quick start options are available:

**Step 1**
* [Download the latest release](https://github.com/assemble/assemble-example-readme/zipball/master).
* Clone the repo: `git clone git://github.com/assemble/assemble-example-readme.git`.


**Step 2**
Install the dependencies with `npm install`.

**Step 3**
Run `grunt` to build.




## The "assemble" task
### Overview

`assemble-example-readme`  [assemble]()

## Options

To build the README, we only require the following minimal task configuration.


### Default Options

Inside the Gruntfile is the default `assemble-example-readme` task.

```js
grunt.initConfig({
  assemble-example-readme: {
    options: {
      // Task-specific options go here.
    },
    readme: {
      options: {
        // Target-specific options go here.
      },
      files: [
        // The is
        '.': ['src/README.hbs']
      ]
    }
  }
})
```


``` js
assemble-example-readme: {
  options: {
    helpers: '<%= pkg.helpers %>',
  },
  readme: {
    options: {
      layout:   'src/layout.hbs',
      partials: 'src/content/*.md',
      data:    ['package.json'],
      ext:      '.md'
    },
    files: {
      '.': ['src/README.hbs']
    }
  }
}
```

``` js
assemble-example-readme: {
  options: {
    bower: false,
    travis: false,
    development: false,
    helpers: '<%= pkg.helpers %>',
    assets:  'dist'
  },
  readme: {
    options: {
      changelog:'<%= changelog %>',
      layout:   'src/layout.hbs',
      partials: 'src/content/*.md',
      data:    ['package.json'],
      ext:      '.md'
    },
    files: {
      '.': ['src/README.hbs']
    }
  }
}
```


``` js
readme: {
  options: {
    travis: false,
    development: false,
    changelog: '<%= changelog %>',

    layout:    'src/layout.hbs',
    partials:  'src/content/*.hbs',
    data:     ['package.json'],
    ext: '.md'
  },
  files: {
      '.': ['src/README.hbs']
  }
}
```




``` js
readme: {
  options: {
    travis: false,
    development: false,
    changelog: '<%= changelog %>',
    ...
  },
  ...
}
```

### name


### changelog


### development

 

## Release History
 * 2013-03-02    v0.1.2    Changelog templates now add history to README 
 * 2013-03-01    v0.1.1    Adds README example. Uses templates/data and partials for sections. 
 * 2013-02-28    v0.1.0    First commit. 



---
Authored by [assemble](http://github.com/assemble/assemble)

_This file was generated on Sun Mar 10 2013 15:27:43._
