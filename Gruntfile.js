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
		imagemin: {
	    target: {
	    	options: {
	    		pngquant: true
	    	},
	      files: [{
	        expand: true,
	        cwd: 'build/',
	        src: ['**/*.{png,jpg,gif}'],
	        dest: 'build/'
	      }]
	    }
	  },
	  jekyll: {
	    options: {
	        bundleExec: true
	    },
	    build: {
	      options: {
	        dest: '_site/',
	        config: '_config.yml'
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
				files: ['_layouts/*', '_posts/*', '*.markdown'],
				tasks: ['jekyll']
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', [
		'clean',
		'sass',
		'autoprefixer',
		'svg2png',
		'jekyll',
		'imagemin'
	]);

};
