module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: grunt.file.readJSON('bower.json'),

    jade: {
      compile: {
        options: {
          client: true,
          compileDebug: false,
          namespace: 'JST',
          data: {
            debug: false
          }
        },
        files: {
          'public/js/templates.js': ['public/templates/**/*.jade']
        }
      }
    },

    // sass: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'styles',
    //       src: ['*.scss'],
    //       dest: '/publi/css',
    //       ext: '.css'
    //     }]
    //   }
    // },

    // requirejs: {
    //   build: {
    //     options:{
    //       baseUrl: 'public/js',
    //       mainConfigFile: 'public/js/main.js',
    //       name: 'main',
    //       out: 'public/dist/js/main.js'
    //     }
    //   }
    // },

    watch: {
      templates: {
        files: ['public/templates/**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true,
        },
      }
    },


    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          nodeArgs: ['--debug'],
          env: {
            PORT: '3000'
          }
        }
      }
    },

    concurrent: {
      server: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');


  // Default task(s).
  grunt.registerTask('default', ['concurrent:server']);

};