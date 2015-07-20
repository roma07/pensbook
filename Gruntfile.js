module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    compress: true, //minifying the result
                },
                files: {
                    "./build/assets/css/frontend.css":"./assets/less/frontend.less",
                    "./build/assets/css/backend.css":"./assets/less/backend.less"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less']);
};