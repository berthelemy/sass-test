module.exports = function(grunt) {

  grunt.initConfig({
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
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'css/main.css': 'sass/main.scss',       // 'destination': 'source' 
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'bower_components/normalize.css/normalize.css', 
          'bower_components/slick.js/slick/slick.css',
          'bower_components/animate.css/animate.css',
          'css/main.css', 
        ],
        dest: 'build/styles.css',
      },
    },    
  });
   
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass-globbing');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', [
    'sass', 
    'sass_globbing',
    'concat'
  ]);

};