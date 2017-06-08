module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        aglio: {
            'all': {
                'files': { 'docs/index.html': ['src/index.apib'] },
                'options': {
                    'theme': 'slate',
                    'separator': '\\n',
                    'includePath': 'src'
                }
            }
        },
        watch: {
            'aglio': {
                'files': [
                    'src/**/*.apib',
                    'src/**/*.md',
                    'src/**/*.json'
                ],
                'tasks': ['aglio'],
                'options': { 'livereload': '<%= connect.options.livereload %>' }
            }
        },
        connect: {
            options: {
                port: 8080,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: false,
                    base: 'docs'
                }
            }
        }
    });
    grunt.registerTask('build', ['aglio']);
    grunt.registerTask('serve', [
        'build',
        'connect:livereload',
        'watch'
    ]);
};