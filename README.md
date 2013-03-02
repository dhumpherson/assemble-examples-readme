# assemble-example-readme

> Example project for keeping README information up to date using templates and JSON. Inspired by grunt-contrib-internal.


## Getting Started
This plugin requires Grunt `0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install assemble-example-readme --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('assemble-example-readme');
```

## Assemble Example Readme task
_Run this task with the `grunt assemble-example-readme` command._


## Overview

This is a proof of concept, inspired by `grunt-contrib-internal`.


Aliquam hendrerit congue mauris at imperdiet. Suspendisse sit amet justo eu lacus tempor malesuada aliquam et massa. Proin malesuada, sem id facilisis facilisis, ipsum lacus tincidunt dui, ut tincidunt diam urna vitae tellus. Etiam auctor dapibus felis, auctor eleifend erat semper non. [Lorem](http://www.ipsum.com/) laoreet metus. Duis odio elit, venenatis nec malesuada at, pretium ut quam. Aenean sagittis eleifend rutrum. Ut dictum volutpat metus sit amet imperdiet. Integer iaculis massa vel ipsum tincidunt dictum. In fringilla pellentesque massa eget faucibus. Quisque vitae ligula justo.

## Options

In ullamcorper turpis ac enim suscipit et rhoncus leo molestie. Mauris interdum pulvinar sodales. In molestie tempus tellus eu vulputate. Sed eget risus purus. Phasellus tempus diam vel dui commodo sagittis. Nullam eu dolor orci, ac dignissim ligula. Quisque turpis elit, tempor id elementum sed, viverra eget risus. Mauris fermentum tincidunt tellus, ut lobortis dui suscipit in.


## Examples

## Tips

**Sublime Text Syntax Highlighting**

You will notice that the partials in this example have the extension `.md.hbs`, this isn't really necessary for the task to work, but it makes it more obvious that we're using `markdown` templates. The downside is that you lose syntax highlighting for markdown when you add the `.hbs` extension. If you use Sublime Text 2, here is how to fix that:

Go to **preferences**, and then **browse packages** and search for a file named `Markdown.tmLanguage`. Near the top of the file you will find a list of `fileTypes` (really just their extensions):

``` xml
  <array>
    <string>mdown</string>
    <string>markdown</string>
    <string>markdn</string>
    <string>md</string>
  </array>
```

Add `<string>md.hbs</string>` to the list, just below `markdn`, and then save. Syntax highlighting for markdown should now be working for all files with the extension `.md.hbs`.

## Release History
_no changes_

---
Authored by [Jon Schlinkert](http://github.com/jonschlinkert)

_This file was generated on Fri Mar 01 2013 22:42:37._