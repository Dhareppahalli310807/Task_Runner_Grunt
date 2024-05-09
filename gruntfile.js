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
        },
        // configure minify css
        cssmin:{
            target:{
                files:[{
                    expand:true,
                    cwd:"src/css",
                    src:["*.css", "!*.min.css"],
                    dest:"dest/css",
                    ext:".min.css"
                }]
            }
        }
    })

    // 3. load the libraries
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. setting up tasks
    grunt.registerTask('default', ['uglify', "cssmin"]);
}