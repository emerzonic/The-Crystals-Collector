"use strict";

var crystalTotal;
var wins = 0;
var losses = 0;
var playerTotal = 0;
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
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    playerTotal = 0;
    $("#playerTotal").text(playerTotal);    
}

function gameOn(){
        $("#crystal1").click(function () {
            reset ();
            $(this).slideUp(200).slideDown(200);
            playerTotal += crystal1;
            $("#playerTotal").text(playerTotal);
          UpdateAndCheck();  
        });
        $("#crystal2").click(function () {
            reset ();
            $(this).slideUp(200).slideDown(200);
            playerTotal += crystal2;
            $("#playerTotal").text(playerTotal);
          UpdateAndCheck();  
        });
        $("#crystal3").click(function () {
            reset ();
            $(this).slideUp(200).slideDown(200);
            playerTotal += crystal3;
            $("#playerTotal").text(playerTotal);
          UpdateAndCheck();  
        });
        $("#crystal4").click(function () {
            reset ();
            $(this).slideUp(200).slideDown(200);
            playerTotal += crystal4;
            $("#playerTotal").text(playerTotal);
          UpdateAndCheck();  
        });   
    }

function reset (){
    $(".lost").text("Losses");
    $(".win").text("Wins");
    $(".heading").css("background-color", "rgb(2, 68, 109)");
} 

function UpdateAndCheck(){
    if(playerTotal === crystalTotal){
        wins+= 1;
        $("#wins").text(wins);
        $(".win").text("You Won")
        $(".heading").css("background-color", "green");
        generateNumbers ();
    }else if(playerTotal > crystalTotal ){
        losses+= 1;
        $("#losses").text(losses);
        $(".lost").text("You Lost")
        $(".heading").css("background-color", "red");
        generateNumbers ();
    }
}





 






















































