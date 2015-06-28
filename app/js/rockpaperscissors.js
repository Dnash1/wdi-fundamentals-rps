function getInput() {
console.log("Please choose either 'rock', 'paper', or 'scissors'.")
return prompt();
}
function randomPlay() {
var randomNumber = Math.random();
if (randomNumber < 0.33) {
		return "rock";
	} else if (randomNumber < 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

var move;
var playerWins = 0;
var computerWins = 0;

function getPlayerMove(move) {

	return move || getInput();
}
function getComputerMove(move) {

	return move || randomPlay();
}
function getWinner(playerMove,computerMove) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
	if (playerMove === computerMove) {
		console.log("It's a tie.");
		var winner = 'tie';
	}
	if (playerMove === 'rock') {
		if (computerMove === 'paper') {
			console.log("Computer victory.");
			var winner = 'computer';
			computerWins++;

		}
		if (computerMove === 'scissors') {
			console.log("Player victory.");
			var winner = 'player';
			playerWins++;
		}
	}
	if (playerMove === 'paper') {
		if (computerMove === 'scissors') {
			console.log("Computer victory.");
			var winner = 'computer';
			computerWins++;
		}
		if (computerMove === 'rock') {
			console.log("Player victory.");
			var winner = 'player';
			playerWins++;
		}
	}
	if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			console.log("Computer victory.");
			var winner = 'computer';
			computerWins++;
		}
		if (computerMove === 'paper') {
			console.log("Player victory.");
			var winner = 'player';
			playerWins++;
		}
	}
return winner;
}


function playToFive() {
console.log('Let\'s play Rock Paper Scissors');
	for (gamesPlayed = 1; gamesPlayed < 5; gamesPlayed++) {
		console.log("Game number:" + gamesPlayed);
		getWinner();
	}

  return [playerWins, computerWins];
}
