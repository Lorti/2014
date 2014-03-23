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
      target: ['build']
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
	  	test: {
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

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['scss/**'],
				tasks: ['sass', 'autoprefixer']
			},
			html: {
				files: ['_layouts/**', '_posts/**', 'css/**', 'js/**', '*.html', '*.markdown'],
				tasks: ['jekyll:test']
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concurrent']);
	grunt.registerTask('build', [
		'clean',
		'sass',
		'autoprefixer',
		'svg2png',
		'jekyll:build',
		'imagemin'
	]);

};
