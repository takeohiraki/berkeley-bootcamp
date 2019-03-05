

document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

})

document.getElementById("blueBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

})

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.opacity = 0.5;

})

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px";

})



/*
$("#growBtn").on("click", function() {
    // $("#funText").css("color", "pink")
    // document.getElementById("box").style.height = "250px";

    // $("#funText").css("color", "pink")
    $("#box").style.height = "250px";
})
*/

