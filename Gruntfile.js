/*global module*/
var pkg = require('./package');

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
						path: '../docs-layout',
						author: '<%= pkg.author %>',
						appName: '<%= pkg.name %>',
                        version: '<%= pkg.version %>',
                        description: '<%= pkg.description %>',
						homepage: "'<%= pkg.homepage %>'",
                        repository: "<%= pkg.repository.url %>",
                        license: "<%= pkg.license %>",
						showAppName: false
					}
				},
				files: [{
					src: 'README.md',
					dest: 'docs/index.html'
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
						path: '../../../../docs-layout',
						author: '<%= pkg.author %>',
						appName: '<%= pkg.name %>',
                        version: '<%= pkg.version %>',
                        description: '<%= pkg.description %>',
						homepage: "'<%= pkg.homepage %>'",
                        repository: "<%= pkg.repository.url %>",
                        license: "<%= pkg.license %>",
						showAppName: true
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
        console.log("=================================================================");
		console.log("   _     ______                    _   _       _");
		console.log("  (_)   |  ____|                  | | (_)     | |");
		console.log("   _ ___| |__   ___ ___  ___ _ __ | |_ _  __ _| |___");
		console.log("  | / __|  __| / __/ __|/ _ \\ '_ \\| __| |/ _` | / __|");
		console.log("  | \\__ \\ |____\\__ \\__ \\  __/ | | | |_| | (_| | \\__ \\");
		console.log("  | |___/______|___/___/\\___|_| |_|\\__|_|\\__,_|_|___/");
		console.log(" _/ |");
		console.log("|__/");
		console.log("@name " + pkg.name);
        console.log("@version " + pkg.version);
        console.log("@description " + pkg.description);
        console.log("@author " + pkg.author);
		console.log("@homepage " + pkg.homepage);
		console.log("@repository " + pkg.repository.url);
		console.log("@license " + pkg.license);
		console.log("=================================================================");
    });
};
