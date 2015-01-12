'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Define the configuration for all the tasks
    grunt.initConfig({
        exec: {
            'lint' : 'coffeelint src test',
            'test': 'mocha test --recursive -R progress --compilers coffee:coffee-script/register',
            'cc': 'mocha test --recursive -R html-cov --compilers coffee:coffee-script/register -r blanket > report.html',
            'travis-cov': 'mocha test --recursive -R travis-cov --compilers coffee:coffee-script/register -r blanket'
        },
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            server: {
                files: ['**'],
                tasks: ['lint', 'test', 'cc']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['all']
            }
        }
    });

    grunt.registerTask('default', 'Watch files', function () {
        grunt.task.run([
            'watch'
        ]);
    });

    grunt.registerTask('all', 'CoffeeLint', 'exec');
    grunt.registerTask('lint', 'CoffeeLint', 'exec:lint');
    grunt.registerTask('test', 'Testing...', 'exec:test');
    grunt.registerTask('cc', 'Generating Code Coverage...', 'exec:cc');
};
