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