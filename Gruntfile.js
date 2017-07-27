module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                     //'vendor/events.js',
                    'src/scroller.js'
                ],
                dest: 'dist/scripts/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/scripts/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            options: {
              curly: true,
              eqeqeq: true, 
              eqnull: true,
              browser: true,
              reporter: 'jslint',
              reporterOutput: 'reports/jshint.xml',
              globals: {
                  jQuery: true
              },
            },
            all: ['src/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('build-js', ['jshint', 'concat', 'uglify']);
    grunt.registerTask('build', ['build-js']);
};