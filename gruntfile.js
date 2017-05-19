module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/style.css': 'assets/sass/style.scss'
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    'assets/css/style.css': 'assets/css/style.css'
                }
            }
        },
        // start with command 'grunt cssmin' to minimize css file
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css/',
                    ext: '.min.css'
                }]
            }
        },

        // start with command 'grunt uglify' to minimize js file
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },
        watch: {
            css: {
                files: 'assets/sass/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch']);
};