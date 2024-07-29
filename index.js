var dice1Val = Math.floor(Math.random() * 6) + 1;
var dice2Val = Math.floor(Math.random() * 6) + 1;

function rollADice() {
    document.getElementsByClassName('dice1').innerText = dice1Val;
    document.getElementsByClassName('dice2').innerText = dice2Val;
    console.log("Dice 1 Value: " + dice1Val + " Dice 2 Value: " + dice2Val);

    if (dice1Val === dice2Val) {
        document.querySelector('h1').innerText = "Draw Match";
    }

    else if (dice1Val > dice2Val) {
        document.querySelector('h1').innerText = "Player 1 Wins the Match";
    }

    else if (dice2Val > dice1Val) {
        document.querySelector('h1').innerText = "Player 2 Wins the Match";
    }
}

