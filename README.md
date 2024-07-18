# Task_Runner_Grunt

# Task Runner with Grunt

This project demonstrates the usage of Grunt to automate tasks such as minifying JavaScript and CSS files. Grunt is a JavaScript task runner that helps automate repetitive tasks and improve workflow efficiency.

## Project Structure



task_runner_grunt
gruntfile.js
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

src/css/input.css
body {
    margin: 0px;
      font-family: Arial, sans-serif;
  }
  
  /* Body Header */
  
  #body-header {
    position: relative;
    height: 65vh;
    opacity: 0.8;
    background-image: url(https://ninjasfiles.s3.amazonaws.com/asset_0000000000000020_1549743985_macbook_mouse.jpg);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  
  /* Horizontal Lists */
  
  .horizontal-list {
    list-style: none;
    padding-left: 0px;
  }
  
  .horizontal-list li {
    display: inline-block;
    margin: 0px 8px 8px 0px;
  }
  
  .horizontal-list li a {
    color: white;
    text-decoration: none;
    transition: color 0.5s, border-bottom 4s;
  }
  
  .horizontal-list li a:hover {
    color: lightgrey;
    border-bottom: 1px solid white;
  }
  
  .text-center {
    text-align: center;
  }
  #name-id{
      margin-top:20vh;
      
  }
  
  /* Social Links */
  #name{
      font-size:3rem;
      color:white;
  }
  .social-list {
      position: relative;
      bottom: 20px;
  }
  .social-list li {
      display: inline-block;
      margin: 0px 8px 8px 0px;
  }
  
  .social-list li a img {
      width: 20px;
      height: 20px;
      box-shadow:rgba(230, 196, 196, 0.3);
  }
  
  .social-list li a img:hover {
    color: red;
    border-bottom: 1px solid white;
  }
  
  

src/js/input1.js
document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button =>{
        button.addEventListener("click", function(){
            alert("Button clicked");
        });
    });
    console.log("Sample js Loaded and Ready..");
});

function sampleFunction(){
    console.log("this is a sample function");
}

let sampleVar = "this is a sample var";

dest/css
dest/js

for above project give me proper README.md file
ChatGPT
Here is a sample README.md file for your project:

markdown
कोड कॉपी करणे
# Task Runner with Grunt

This project demonstrates the usage of Grunt to automate tasks such as minifying JavaScript and CSS files. Grunt is a JavaScript task runner that helps automate repetitive tasks and improve workflow efficiency.

## Project Structure

├── src
│ ├── css
│ │ └── input.css
│ ├── js
│ │ └── input1.js
├── dest
│ ├── css
│ └── js
├── Gruntfile.js
└── package.json


## Prerequisites

- Node.js and npm installed
- Grunt CLI installed globally

## Getting Started

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/Dhareppahalli310807/task_runner_grunt.git
    cd task_runner_grunt
    ```

2. Install the required npm packages:

    ```sh
    npm install
    ```
