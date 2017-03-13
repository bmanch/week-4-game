var wins = 0;

var losses = 0;

var diamondValue = 0;

var sapphireValue = 0;

var rubyValue = 0;

var emeraldValue = 0;

var randomNumber = 0;

var playerScore = 0;

var roundNumber = 1;

$(document).ready(function() {
	$('#diamond').click(diamondFunction);
	$('#sapphire').click(sapphireFunction);
	$('#ruby').click(rubyFunction);
	$('#emerald').click(emeraldFunction);


	function randomValues () {
		
		playerScore = 0;
		$('#yourScore').html(playerScore);

		randomNumber = (Math.floor(Math.random() * 102)) + 19;
		$('#gameNumber').html(randomNumber);

		diamondValue = (Math.floor(Math.random() * 12)) + 1;

		sapphireValue = (Math.floor(Math.random() * 12)) + 1;

		rubyValue = (Math.floor(Math.random() * 12)) + 1;

		emeraldValue = (Math.floor(Math.random() * 12)) + 1;

	};

	function diamondFunction () {

		playerScore += diamondValue;
		$('#yourScore').html(playerScore);

		if (playerScore === randomNumber) {
			$('#result').html("You won!");
			wins++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

		else if (playerScore > randomNumber) {
			$('#result').html("You lost!");
			losses++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

	};

	function sapphireFunction () {

		playerScore += sapphireValue;
		$('#yourScore').html(playerScore);

		if (playerScore === randomNumber) {
			$('#result').html("You won!");
			wins++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

		else if (playerScore > randomNumber) {
			$('#result').html("You lost!");
			losses++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

	};

	function rubyFunction () {

		playerScore += rubyValue;
		$('#yourScore').html(playerScore);

		if (playerScore === randomNumber) {
			$('#result').html("You won!");
			wins++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

		else if (playerScore > randomNumber) {
			$('#result').html("You lost!");
			losses++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

	};

	function emeraldFunction () {

		playerScore += emeraldValue;
		$('#yourScore').html(playerScore);

		if (playerScore === randomNumber) {
			$('#result').html("You won!");
			wins++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

		else if (playerScore > randomNumber) {
			$('#result').html("You lost!");
			losses++;
			$('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
			roundNumber++;
			setTimeout(round, 2000);
			randomValues();
		}

	};

	function round () {
		$('#result').html("Round: " + roundNumber)
	}

	randomValues();

});