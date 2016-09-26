module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    md2html: {
      one_file: {
        options: {
          basePath: './docs-layout/',
          layout: 'docs-layout/layout.html',
          templateData: {
            basename: function (src) {
              return src.substr(src.lastIndexOf(path.sep) + 1);
            },
            innerPage: false,
            path: '../docs-layout',
            author: '<%= pkg.author %>',
            appName: '<%= pkg.name %>',
            version: '<%= pkg.version %>',
            description: '<%= pkg.description %>',
            homepage: '<%= pkg.homepage %>',
            repository: '<%= pkg.repository.url %>',
            license: '<%= pkg.license %>'
          }
        },
        files: [{
          src: 'README.md',
          dest: 'docs/index.html'
        }, {
          src: 'CHANGELOG.md',
          dest: 'docs/CHANGELOG.html'
        }]
      },
      multiple_files: {
        options: {
          basePath: './docs-layout/',
          layout: 'docs-layout/layout.html',
          templateData: {
            basename: function (src) {
              return src.substr(src.lastIndexOf(path.sep) + 1);
            },
            innerPage: true,
            path: '../../../../docs-layout',
            author: '<%= pkg.author %>',
            appName: '<%= pkg.name %>',
            version: '<%= pkg.version %>',
            description: '<%= pkg.description %>',
            homepage: '<%= pkg.homepage %>',
            repository: '<%= pkg.repository.url %>',
            license: '<%= pkg.license %>'
          }
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.md'],
          dest: 'docs/src/',
          ext: '.html',
          rename: function (dest, src) {
            return dest + src.replace('README', 'index');
          }
        }]
      }
    }
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-md2html');

  // Register task(s).
  grunt.registerTask(
    'buildDocs',
    'Converts Markdown documentation files to HTML',
    ['md2html']
  );
};
