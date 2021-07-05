let rollCount = 0;
var playerOneTotal = 0;
var playerTwoTotal = 0;
var playerOneRoundTotal = 0;
var playerTwoRoundTotal = 0;

var dice = [];
for ( i = 0; i < 6; i++) {
    dice[i] = {
        value: i + 1,
        src: 'images/dice' + (i+1) + '.png'
    }
}

function rollDice() {

    var diceRoll = [];
    for ( i = 1; i <= 4; i++ ) {
        diceRoll[i] = {
            img: dice[rollDie()]
        }
        document.getElementById('dice'+i).setAttribute('src', diceRoll[i].img.src)
    }
    playerOneRoundTotal = calculateScore( diceRoll[1].img.value, diceRoll[2].img.value);
    playerTwoRoundTotal = calculateScore( diceRoll[3].img.value, diceRoll[4].img.value);

    return (playerOneRoundTotal, playerTwoRoundTotal);
}

function rollDie() {
    var roll = Math.floor(Math.random() * 6);
    return roll;
}

function calculateScore( value1, value2 ) {
    if ( value1 == 1 || value2 == 1) {
        return roundScore = 0;
    } else {
        if ( value1 == value2 ) {
            return roundScore = ( value1 + value2 ) * 2;
        } else {
            return roundScore = value1 + value2;
        }
    }
}
document.getElementById('buttonRoll').addEventListener('click', function() {
    rollCount++;
    rollDice();
    playerOneTotal = playerOneTotal + playerOneRoundTotal;
    playerTwoTotal = playerTwoTotal + playerTwoRoundTotal;
    document.getElementById('playerOneRound').innerText = playerOneRoundTotal;
    document.getElementById('playerTwoRound').innerText = playerTwoRoundTotal;
    document.getElementById('playerOneTotal').innerText = playerOneTotal;
    document.getElementById('playerTwoTotal').innerText = playerTwoTotal;
    document.getElementById('rollNumber').innerText = rollCount;

    if (rollCount == 3 ) {
        if ( playerOneTotal > playerTwoTotal ) {
            document.getElementById('winner').innerHTML = "The <span>Player 1</span> has won the game"
        } else if ( playerOneTotal == playerTwoTotal ) {
            document.getElementById('winner').innerHTML = "This game has ended in a tie"
        } else {
            document.getElementById('winner').innerHTML = "The <span>Player 2</span> has won the game"
        }
        document.getElementById('playerScore').innerText = playerOneTotal;
        document.getElementById('computerScore').innerText = playerTwoTotal;
        setTimeout(function() { 
            document.getElementById('popUp').hidden = false;
        }, 300 );
    }
});
document.getElementById('newGame').addEventListener('click', function() {
    location.reload();
});
document.getElementById('playAgain').addEventListener('click', function() {
    location.reload();
});
document.getElementById('rulesButton').addEventListener('click', function() {
    document.getElementById('rules').style.transform = "scale(1)";
});
document.getElementById('rulesClose').addEventListener('click', function() {
    document.getElementById('rules').style.transform = "scale(0)";
})