function Crystal(crystalValue) {
    this.crystalValue = function () {
        return Math.floor(Math.random() * 12) + 1;
    };
}

var crystal1 = new Crystal();
var crystal2 = new Crystal();
var crystal3 = new Crystal();
var crystal4 = new Crystal();

var wins = 0;
var losses = 0;
var playerTotal;
var crystalTotal;

init();

function init() {
    generateNumbers();
    gameOn();
}

//generate random numbers for game total and each crystal and assign to a value attribute
function generateNumbers() {
    crystalTotal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#currentTotal").text(crystalTotal);
    $('#crystal1').attr('value', (crystal1.crystalValue()));
    $('#crystal2').attr('value', (crystal2.crystalValue()));
    $('#crystal3').attr('value', (crystal3.crystalValue()));
    $('#crystal4').attr('value', (crystal4.crystalValue()));
    playerTotal = 0;
    $("#playerTotal").text(playerTotal);
}

// game function. Adds up the player total 
function gameOn() {
    $('.img-thumbnail').on('click', function () {
        var ranValue = Number($(this).attr('value'));
        reset();
        $(this).slideUp(200).slideDown(200);
        playerTotal += ranValue;
        $("#playerTotal").text(playerTotal);
        UpdateAndCheck();
    });
}

//resets the heading color, wins and losses words 
function reset() {
    $(".lost").text("Losses");
    $(".win").text("Wins");
    $(".heading").css("background-color", "rgb(2, 68, 109)");
}

//check the game status and updates the player.
function UpdateAndCheck() {
    if (playerTotal === crystalTotal) {
        wins += 1;
        $("#wins").text(wins);
        $(".win").text("You Won");
        $(".heading").css("background-color", "green");
        generateNumbers();
    } else if (playerTotal > crystalTotal) {
        losses += 1;
        $("#losses").text(losses);
        $(".lost").text("You Lost");
        $(".heading").css("background-color", "red");
        generateNumbers();
    }
}