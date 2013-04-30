# [assemble-examples-readme v0.2.3](https://github.com/assemble/assemble-examples-readme) [![Build Status](https://travis-ci.org//assemble-examples-readme.png)](https://travis-ci.org//assemble-examples-readme)

> Use Assemble to generate a README from basic templates.

See more [assemble examples][assemble-examples].

## Getting started
* **[Download this project][download]** and unzip it into a new folder.  
* In the project folder, run `npm install` to install [Assemble][assemble], [Grunt](http://gruntjs.com/) and any other dependencies.
* Once the dependencies are installed you may run `grunt assemble` to build the example project.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile][gruntfile], as well as install and use Grunt plugins. 



## The "assemble" task

### Overview
In the project's Gruntfile, the example `assemble` task is pre-loaded with paths and options following standard Grunt.js conventions:

```js
grunt.initConfig({

  // The 'assemble' task
  assemble: {
    options: {
      pkg: grunt.file.readJSON('package.json'),
      partials: 'src/content/*.hbs', // readme "sections"
      data: 'src/data/readme.yml', // extra metadata
      flatten: true,
      ext: ''
    },
    readme: {
      src:  'src/templates/README.md.hbs', // readme template
      dest: './'
    }
  }
})
```

### Options
Visit [Assemble's documentation][wiki] to learn about the available task and target options as well as how to configure them. Also, if are not yet familiar with Grunt.js, please consider visiting the Grunt documentation to learn more about [configuring tasks][configuring-tasks]. 

#### `flatten`
Type: `Boolean` (optional)
Default: `false`

Remove anything after (and including) the first "." in the destination path, then append this value. In other words, when they are are generated from different source folders this "flattens" them into the same destination directory. See [building the files object dynamically][files-object] for more information on files formats.


#### `layout`
Type: `String` (optional)
Default: `undefined`

If set, this defines the layout file to use for that [target][tasks-and-targets]. Unlike Jekyll, Assemble requires a file extension since you are not limited to using a single file type.

Learn more about [options.layouts][layouts]

#### `partials`
Type: `Object|Array` (optional)
Default: `undefined` 

Specifies the Handlebars [partials][] files, or paths to the directories of files to be used. 

Learn more about [options.partials][partials]

#### `assets`
Type: `String` (optional)
Default: `undefined`

Used with the `{{assets}}` variable to resolve the relative path from the _dest file_ to the _assets_ folder.


#### `data`
Type: `Object|Array` (optional)
Default: `src/data`

Retrieves data from any specified `JSON` and/or `YAML` files to populate the templates when rendered. Data gets passed through the `data` object to the options on the assemble task, then to the context in your templates. 

Learn more about [data][data]

#### `ext`
Type: `String` (optional)
Default: `.html`

Specify the file extension for destination files.  In this example, we specify `ext: ''` in the `assemble` task options, which equates to "no extension". We do this because assemble only discards the last extension at build time, so by 1) telling assemble not to add another extension to the rendered tempaltes, and 2) by naming our [partials](./src/content/) with the "double" `.md.hbs` extension, we are telling Assemble to process any Handlebars templates inside the files, the result is that:

* We can use markdown for writing our content
* Any templates embedded in the markdown will be processed
* The dest files will have the `.md` extension

Note that you _can_ use only the `.md` extension on `src` files, but Assemble will not process embedded templates since the `.md` extension is not "white-listed" for Handlebars templates. 

More info: 
* Learn more about [ext][options] options
* Learn more about processing [markdown][]


## Configuration

### Helpers
[helper-lib](https://github.com/assemble/helper-lib/) is a massive collection of useful Handlebars helpers that can be used on any Handlebars project. As a convenience Assemble includes helper-lib as a dependency, so you can use any helper from that library in your templates. 

We also created some _custom helpers_ for this README example to demonstrate how easy it is to extend Assemble and without writing any Assemble-specific code:

#### {{changelog}}
Usage: `{{changelog}}` or `{{changelog [path/to/file]}}` 
Description: The "changelog" helper retrieves data from the **[CHANGELOG](CHANGELOG)** file in the root of the project, and then converts the changelog entries into a markdown formatted list of entries in the rendered README.md. Accepts a second optional parameter for specifying a different file than the default.

See this helper on [helper-lib](https://github.com/assemble/helper-lib/blob/master/lib/helpers/helpers-markdown.js#L67-L77)

#### {{roadmap}}
Usage: `{{roadmap}}` or `{{roadmap [path/to/file]}}` 
Description: The "roadmap" helper is essentially the same as the "changelog" helper, except it retrieves data from the **[ROADMAP](ROADMAP)** file in the root of the project. This helper also accepts a second optional parameter for specifying a different file than the default.

See this helper on [helper-lib](https://github.com/assemble/helper-lib/blob/master/lib/helpers/helpers-markdown.js#L86-L97)

#### {{authors}}
Usage: `{{authors}}` or `{{authors [path/to/file]}}` 
description: The "authors" helper retrieves data from the **[AUTHORS](AUTHORS)** file in the root of the project, and then converts each authors entry into markdown formatted links in the rendered README.md. Accepts a second optional parameter for specifying a different file than the default.

See this helper on [helper-lib](https://github.com/assemble/helper-lib/blob/master/lib/helpers/helpers-markdown.js#L49-L59)

#### {{now}}
Parameters: `String`
default: `false`
Returns the current time and/or date using the `{{now}}` helper from [helper-lib](https://github.com/assemble/helper-lib/). 

An addition paramter can be passed to customize the output of the date and time, string must be formatted according to these tokens: [http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime]()
``` html
// Template
{{now}}
{{now "%m/%d/%Y"}}

// Result:
Thu Jul 26 2012 23:41:02 GMT-0400 (AST)
07/26/2012
```

## Custom Variables
Values for the following variables are defined in the [readme.yml](./src/data/readme.yml) file. None of these are necessary, they are included for purposes of example. 

#### `travis`
type: `Boolean`
default: `false`
Used in the README title. Checks to determine if a `.travis.yml` file is present, if `true` the [Travis CI](https://travis-ci.org/) badge is rendered. 






## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Use [Assemble][assemble] to build and maintain your gh-pages, blog or documentation. Lint and test your code using [Grunt](http://gruntjs.com/).



## Authors
* [Brian Woodward](http://github.com/doowb)  
* [Jon Schlinkert](http://github.com/jonschlinkert)  

## Release History
* 2013-04-29    v0.2.3    Clean up templates.Corrected references to changelog, authors and roadmap to all be lowercase to work with helpers.Removed README.yml from options.data in Gruntfile, since all data is sourced from package.json anyway.
* 2013-04-19    v0.2.2    Update repo description.
* 2013-04-18    v0.2.1    Completely refactored. New custom helpers, examples and documentation.
* 2013-03-02    v0.1.2    Changelog templates now add history to README
* 2013-03-01    v0.1.1    Adds README example.Uses templates/data and partials for sections.
* 2013-02-28    v0.1.0    First commit.


## Roadmap
* 2013-05-01    v0.3.0    Use section helpers.


---

Project by [Jon Schlinkert](http://github.com/jonschlinkert/)

_This file was generated using [Assemble][], a Grunt.js plugin for generating sites, on Mon Apr 29 2013 20:57:40 GMT-0400 (Eastern Daylight Time)._

[download]: https://github.com/assemble/assemble-examples-basic/archive/master.zip
[assemble]: https://github.com/assemble/assemble/
[assemble-examples]: https://github.com/assemble/assemble-examples

[wiki]: https://github.com/assemble/assemble/wiki
[data]: https://github.com/assemble/assemble/wiki/data
[layouts]: https://github.com/assemble/assemble/wiki/layouts
[markdown]: https://github.com/assemble/assemble/wiki/markdown
[options]: https://github.com/assemble/assemble/wiki/options
[partials]: https://github.com/assemble/assemble/wiki/partials

[gruntfile]: http://gruntjs.com/sample-gruntfile
[configuring tasks]: http://gruntjs.com/configuring-tasks
[files-object]: http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
[tasks-and-targets]: http://gruntjs.com/configuring-tasks#task-configuration-and-targets