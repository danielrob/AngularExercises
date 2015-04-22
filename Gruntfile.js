module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.initConfig({
    watch: {
      options: { livereload: true },
      files: ['index.html'],    
    },
  });
};
