$(document).ready(function(){
    //the hand chosen by player
    $("#rock").click(playerRock);
    $("#paper").click(playerPaper);
    $("#scissors").click(playerScissors);
    $("#lizard").click(playerLizard);
    $("#spock").click(playerSpock);

    var playerScore = 0;
    var aiScore = 0;

    //player chooses Rock
    function playerRock(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Rock")
            $("#aiChoice").text("Rock")
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Rock")
            $("#aiChoice").text("Paper")
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Rock")
            $("#aiChoice").text("Scissors")
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Rock")
            $("#aiChoice").text("Lizard")
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Rock")
            $("#aiChoice").text("Spock")
            $("#results").text("AI WINS");
            aiScore++;
        }

        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);

    }

    function playerPaper(event) {
        event.preventDefault();

        //ai chooses a hand at random
        var aiChoice = Math.floor(Math.random() * 5);

        if (aiChoice === 0) {//ai chooses rock
            $("#playerChoice").text("Paper")
            $("#aiChoice").text("Rock")
            $("#results").text("PLAYER WINS");
            playerScore++;
        } else if (aiChoice === 1) { //ai chooses paper
            $("#playerChoice").text("Paper")
            $("#aiChoice").text("Paper")
            $("#results").text("TIE");
            playerScore++;
            aiScore++;
        } else if (aiChoice === 2) { //ai chooses scissors
            $("#playerChoice").text("Paper")
            $("#aiChoice").text("Scissors")
            $("#results").text("AI WINS");
            aiScore++;
        } else if (aiChoice === 3) {//ai chooses lizard
            $("#playerChoice").text("Paper")
            $("#aiChoice").text("Lizard")
            $("#results").text("AI WINS");
            aiScore++;
        } else {//ai chooses spock
            $("#playerChoice").text("Paper")
            $("#aiChoice").text("Spock")
            $("#results").text("PLAYER WINS");
            playerScore++;
        }

        $("#playerScore").text(playerScore);
        $("#aiScore").text(aiScore);
    }

    function playerScissors(event) {
        event.preventDefault();

        $("#results").text("Scissors");
    }

    function playerLizard(event) {
        event.preventDefault();

        $("#results").text("Lizard");
    }

    function playerSpock(event) {
        event.preventDefault();

        $("#results").text("Spock");
    }
});