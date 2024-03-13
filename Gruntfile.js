module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        src: 'src/js/script.js',
                        dest: 'dist/js/script.js'
                    },
                    {
                        src: 'src/index.html',
                        dest: 'dist/index.html'
                    }
                ],
            },
        },
        sass: {
            options: {
                implementation: require('sass'),
                sourceMap: true // or any other options you need
            },
            build: {
                files: [{
                    src: 'src/scss/styles.scss',
                    dest: 'dist/css/styles.css'
                }]
            }
        },
        uglify: {
            build: {
                files: [{
                    src: 'dist/js/script.js',
                    dest: 'dist/js/script.js'
                }
                ]
            }
        }

    })



    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'sass', 'uglify']);

}