$(document).ready(function(){
    //function is ran based on what the player chose
    $("#rock").click(playerRock);
    $("#paper").click(playerPaper);
    $("#scissors").click(playerScissors);
    $("#lizard").click(playerLizard);
    $("#spock").click(playerSpock);

    //player starts with 0 score
    var playerScore = 0;
    //computer starts with 0 score
    var aiScore = 0;

    //player chooses Rock
    function playerRock(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Rock");
            $("#aiChoice").text("Rock");
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Rock");
            $("#aiChoice").text("Paper");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Rock");
            $("#aiChoice").text("Scissors");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Rock");
            $("#aiChoice").text("Lizard");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Rock");
            $("#aiChoice").text("Spock");
            $("#results").text("AI WINS");
            aiScore++;
        }

        //display scores
        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);

    }

    //player chooses paper
    function playerPaper(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Paper");
            $("#aiChoice").text("Rock");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Paper");
            $("#aiChoice").text("Paper");
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Paper");
            $("#aiChoice").text("Scissors");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Paper");
            $("#aiChoice").text("Lizard");
            $("#results").text("AI WINS");
            aiScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Paper");
            $("#aiChoice").text("Spock");
            $("#results").text("PLAYER WINS");
            playerScore++;
        }

        //display scores
        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);
    }

    //player chooses scissors
    function playerScissors(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Scissors");
            $("#aiChoice").text("Rock");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Scissors");
            $("#aiChoice").text("Paper");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Scissors");
            $("#aiChoice").text("Scissors");
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Scissors");
            $("#aiChoice").text("Lizard");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Scissors");
            $("#aiChoice").text("Spock");
            $("#results").text("AI WINS");
            aiScore++;
        }

        //display scores
        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);
    }

    //player chooses lizard
    function playerLizard(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Lizard");
            $("#aiChoice").text("Rock");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Lizard");
            $("#aiChoice").text("Paper");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Lizard");
            $("#aiChoice").text("Scissors");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Lizard");
            $("#aiChoice").text("Lizard");
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Lizard");
            $("#aiChoice").text("Spock");
            $("#results").text("PLAYER WINS");
            playerScore++;
        }

        //display scores
        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);
    }

    //player chooses Spock
    function playerSpock(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Spock");
            $("#aiChoice").text("Rock");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Spock");
            $("#aiChoice").text("Paper");
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Spock");
            $("#aiChoice").text("Scissors");
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Spock");
            $("#aiChoice").text("Lizard");
            $("#results").text("AI WINS");
            aiScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Spock");
            $("#aiChoice").text("Spock");
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        }

        //display scores
        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);
    }
});