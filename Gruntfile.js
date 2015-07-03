module.exports = function(grunt) {

  grunt.initConfig({
    sprite:{
      all: {
        src: 'imgs/sprites/*.png',
        retinaSrcFilter: ['imgs/sprites/*-2x.png'],
        retinaDest: 'imgs/spritesheet.retina-2x.png',
        dest: 'imgs/spritesheet.png',
        destCss: 'css/sprites.css'
      }
    },

    copy: {
      build: {
        cwd: 'html-src',
        src: [ '**' ],
        dest: 'build',
        expand: true
      },
    },

    webfont: {
        icons: {
            src: 'icons/*.svg',
            dest: 'build/fonts',
            destCss: 'css',
        },
        options: {
          htmlDemo: false,
        }
    },
    sass_globbing: {
      your_target: {
        files: {
          'sass/main.scss': 'sass/**/*.scss',
        },
        options: {
          useSingleQuotes: false,
        }
      }
    },
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded',
          require: 'susy'
        },
        files: {                         // Dictionary of files 
          'css/main.css': 'sass/main.scss',       // 'destination': 'source' 
        }
      }
    },
    concat: {
      css: {
        src: [
          'bower_components/normalize.css/normalize.css', 
          'bower_components/slick.js/slick/slick.css',
          'bower_components/animate.css/animate.css',
          'css/sprites.css',
          'css/icons.css', 
          'css/main.css', 
        ],
        dest: 'build/css/styles.css'
      },
      js: {
        src: [
          'bower_components/slick.js/slick/slick.min.js', 
          'js/main.js', 
        ],
        dest: 'build/js/scripts.js'
      },
    },
    uglify: {
      my_target: {
        files: {
          'build/js/scripts.min.js': ['build/js/scripts.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'build/css/styles.min.css': ['build/css/styles.css']
        }
      }
    },
    watch: {
      files: ['sass/**/*.scss'],
      tasks: [
        'sass_globbing',
        'sass'
      ],
    },
  });
   
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('default', [
    
    'sass_globbing',
    'sass', 
    'concat',
    'uglify',
    'cssmin',
    'sprite',
    'webfont',
    'copy'
  ]);
};