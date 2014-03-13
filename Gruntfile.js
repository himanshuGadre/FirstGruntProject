module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [
                    'js/libs/chosen.jquery.js',
                    'js/libs/fancybox.js',
                    'js/libs/html5shiv.js',
                    'js/libs/jquery.cycle2.js',
                    'js/libs/jquery-1.8.3.min.js',
                    'js/libs/prism.js',
                    'js/custom_Frontend.js',

                ],
                dest: 'js/build/production.js',
                nonull: true,
            }
        },

        uglify: {
            options: {
              banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        compass: {
            dist: {
                options: {
                sassDir: 'sass',
                cssDir: 'css',
                }
            },
        },

        cssmin: {
          add_banner: {
            options: {
              banner: '/* My minified css file */'
            },
            files: {
              'css/production.min.css':
              [
                'css/bootstrap.css',
                'css/bootstrap-responsive.css',
                'css/fancybox/fancybox.css',
                'css/style.css',
              ]
            }
          }
        },


        watch: {
            gruntfile: {
              files: 'Gruntfile.js',
              tasks: ['notify:gruntChange'],
            },
            scripts: {
                files: ['js/*.js', 'js/libs/*.js'],
                tasks: ['concat', 'uglify'],
            },
            csstosass: {
                files: ['sass/*.sass','sass/*.scss'],
                tasks: ['compass'],
            },
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify','compass','watch']);
};