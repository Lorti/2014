'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		autoprefixer: {
	    options: {
	    	browsers: ['last 3 versions'],
	      map: true
	    },
	    target: {
	      src: 'css/main.css',
      	dest: 'css/main.css'
	    },
	  },

	  clean: {
      before: ['_site/*', '!_site/*.json'],
      after: ['_site/js/modules', '_site/**/*.map', '_site/**/thumbs.db', '!_site/*.json']
    },

    concat: {
      target: {
        src: [
          'js/main.js',
          'js/modules/baseliner.js',
          'js/modules/grid.js',
          'js/modules/rhythm.js',
          'js/modules/svg.js'
        ],
        dest: '_site/js/main.js'
      }
    },

    concurrent: {
    	target: ['watch', 'connect']
    },

    connect: {
    	server: {
    		options: {
    			port: 4000,
    			base: '_site',
    			keepalive: true,
    			livereload: true
    		}
    	}
    },

		imagemin: {
	    target: {
	    	options: {
	    		pngquant: true
	    	},
	      files: [{
	        expand: true,
	        cwd: '_site/',
	        src: ['**/*.{png,jpg,gif}'],
	        dest: '_site/'
	      }]
	    }
	  },

	  jekyll: {
	  	dev: {
	      options: {
	        dest: '_site/',
	        config: '_config.yml'
	      }
	    },
	    build: {
	      options: {
	        dest: '_site/',
	        config: '_build.yml'
	      }
	    }
	  },

		sass: {
	    target: {
	      options: {
	        sourcemap: 'true',
	        style: 'compressed'
	      },
	      files: {
	        'css/main.css': 'scss/main.scss'
	      }
	    }
	  },

	  svg2png: {
      target: {
        files: [{
        	src: ['images/*.svg'],
        	dest: 'images/'
        }]
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          sourceMap: true
        },
        files: {
          '_site/js/main.js': '_site/js/main.js'
        }
      },
      build: {
        options: {
          mangle: false,
          compress: {
            global_defs: { 'debug': false },
            dead_code: true
          }
        },
        files: {
          '_site/js/main.js': '_site/js/main.js'
        }
      }
    },

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['scss/**'],
				tasks: ['sass', 'autoprefixer', 'jekyll:dev']
			},
			html: {
				files: [
          '_layouts/**',
          '_posts/**',
          '*.html',
          '*.markdown',
          'tests/**'
        ],
				tasks: ['jekyll:dev']
			},
      js: {
        files: ['js/**'],
        tasks: ['concat', 'uglify:dev', 'jekyll:dev']
      }
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concurrent']);
  grunt.registerTask('createStyles', ['sass', 'autoprefixer']);
  grunt.registerTask('createScripts', ['concat', 'uglify:build']);
	grunt.registerTask('build', [
		'clean:before',
		'createStyles',
		'svg2png',
		'jekyll:build',
    'createScripts',
    'imagemin',
    'clean:after'
	]);

};
