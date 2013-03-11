## Options

To build the README, we only require the following minimal task configuration.


### Default Options

Inside the Gruntfile is the default `{{repo.name}}` task.

```js
grunt.initConfig({
  {{repo.name}}: {
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
{{repo.name}}: {
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
{{repo.name}}: {
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