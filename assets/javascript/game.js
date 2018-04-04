var crystalTotal;
var wins = 0;
var losses = 0;
var playerCurrentTotal = 0;
var crystal1 = 0; 
var crystal2 = 0; 
var crystal3 = 0; 
var crystal4 = 0;
 
init();

function init(){
    generateNumbers ();
    gameOn();
}

function generateNumbers (){
    crystalTotal =  Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
    $("#currentTotal").text(crystalTotal);
    crystal1 = Math.floor(Math.random() * 12) + 1;
        // console.log(crystal1); 
    crystal2 = Math.floor(Math.random() * 12) + 1;
        // console.log(crystal2); 
    crystal3 = Math.floor(Math.random() * 12) + 1;
        // console.log(crystal3); 
    crystal4 = Math.floor(Math.random() * 12) + 1;
        // console.log(crystal4);
    playerCurrentTotal = 0;
    $("#playerCurrentTotal").text(playerCurrentTotal);    
}

function gameOn(){
        $(".heading").css("background-color", "rgb(2, 68, 109);");
        $("#crystal1").click(function () {
            playerCurrentTotal += crystal1;
            $("#playerCurrentTotal").text(playerCurrentTotal);
          UpdateAndCheck();  
        });
        $("#crystal2").click(function () {
            playerCurrentTotal += crystal2;
            $("#playerCurrentTotal").text(playerCurrentTotal);
          UpdateAndCheck();  
        });
        $("#crystal3").click(function () {
            playerCurrentTotal += crystal3;
            $("#playerCurrentTotal").text(playerCurrentTotal);
          UpdateAndCheck();  
        });
        $("#crystal4").click(function () {
            playerCurrentTotal += crystal4;
            $("#playerCurrentTotal").text(playerCurrentTotal);
          UpdateAndCheck();  
        });   
    }


function UpdateAndCheck(){
    if(playerCurrentTotal === crystalTotal){
        wins+= 1;
        $("#wins").text(wins);
        $(".heading").css("background-color", "green");
        generateNumbers ();
    }else if(playerCurrentTotal > crystalTotal ){
        losses+= 1;
        $("#losses").text(losses);
        $(".heading").css("background-color", "red");
        generateNumbers ();
    }
}





 






















































