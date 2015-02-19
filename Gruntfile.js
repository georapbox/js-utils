/*global module*/
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
						author: '<%= pkg.author %>',
						appName: '<%= pkg.name %>',
						"homepage": "https://github.com/georapbox/",
						showAppName: false
					}
				},
				files: [{
					src: 'README.md',
					dest: 'docs/README.html'
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
						author: '<%= pkg.author %>',
						appName: '<%= pkg.name %>',
						"homepage": "https://github.com/georapbox/",
						showAppName: true
					}
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.md'],
					dest: 'docs',
					ext: '.html'
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