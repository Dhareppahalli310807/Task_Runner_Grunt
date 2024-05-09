module.exports = function(grunt){
    // 1. configure the task
    grunt.initConfig({
        // 2. specify task
        uglify:{
            target:{
                files:{
                 "dest/js/main.min.js": ["src/js/input1.js"]   
                }
            }
        }
    })

    // 3. load the libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. setting up tasks
    grunt.registerTask('default', ['uglify']);
}