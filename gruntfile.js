module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less:{
            development:{
                files:{
                    "dev/styles/main.css": "source/styles/main.less"
                }
            },
            production:{
                options:{
                    compress: true
                },
                files:{
                    "dist/styles/main.min.css": "source/styles/main.less"
                }
            }
        },
        watch:{
            less:{
                files:["source/styles/**/*.less"],
                tasks:["less:development"]
            }
        },
        uglify:{
            target: {
                files:{
                    "dist/scripts/main.min.js":"source/scripts/main.js",
                    "dist/scripts/jquery.mask.min.js":"source/scripts/jquery.mask.js",
                    "dist/scripts/jquery.validate.min.js":"source/scripts/jquery.validate.js",
                    "dist/scripts/messages_pt_BR.min.js":"source/scripts/messages_pt_BR.js"
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less:production","uglify"]);
}