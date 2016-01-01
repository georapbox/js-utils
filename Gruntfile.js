/*global module*/
var pkg = require('./package'),
    chalk = require('chalk');

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
						homepage: "'<%= pkg.homepage %>'",
                        repository: "<%= pkg.repository.url %>",
                        license: "<%= pkg.license %>"
					}
				},
				files: [{
					src: 'README.md',
					dest: 'docs/index.html'
				},{
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
						homepage: "'<%= pkg.homepage %>'",
                        repository: "<%= pkg.repository.url %>",
                        license: "<%= pkg.license %>"
					}
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['**/*.md'],
					dest: 'docs/src/',
                    ext: '.html',
                    rename: function(dest, src) {
                        return dest + src.replace('README','index');
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

    grunt.registerTask('postinstall', 'Run this after npm install', function () {
		console.log(chalk.blue("   _     ______                    _   _       _"));
		console.log(chalk.blue("  (_)   |  ____|                  | | (_)     | |"));
		console.log(chalk.blue("   _ ___| |__   ___ ___  ___ _ __ | |_ _  __ _| |___"));
		console.log(chalk.blue("  | / __|  __| / __/ __|/ _ \\ '_ \\| __| |/ _` | / __|"));
		console.log(chalk.blue("  | \\__ \\ |____\\__ \\__ \\  __/ | | | |_| | (_| | \\__ \\"));
		console.log(chalk.blue("  | |___/______|___/___/\\___|_| |_|\\__|_|\\__,_|_|___/"));
		console.log(chalk.blue(" _/ |"));
		console.log(chalk.blue("|__/"));
        console.log(chalk.magenta("@version ") + pkg.version);
        console.log(chalk.magenta("@description ") + pkg.description);
        console.log(chalk.magenta("@author ") + pkg.author);
		console.log(chalk.magenta("@homepage ") + pkg.homepage);
		console.log(chalk.magenta("@repository ") + pkg.repository.url);
		console.log(chalk.magenta("@license ") + pkg.license);
        console.log("");
        console.log(chalk.blue("Basic Commands"));
        console.log("==============");
        console.log("");
        console.log(chalk.green("$ npm run docs"));
        console.log("Creates a docs folder to the root of the project, containing all README files converted to HTML documents.");
        console.log("");
        console.log(chalk.green("$ npm run test"));
        console.log("Runs the tests and creates a tests-reporter folder to the root of the project, that contains an HTML document with the tests results.");
    });
};
