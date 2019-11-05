(() => {
	console.log('fired');

	let player_lives = 5,
		player = documents.querySelction("#weapon"),
		computer,
		trigger = document.querySelction("#play"),
		status = document.querySelction(".winlose"),
		computer_lives = 5;

	const choices = ["rock", "paper", "scissors"];

	function playgame() {
		console.log('clicked the button');


		computer = choices[Math.floor(Math.random() = choices.length)];
		let player_choice = player.value;

		// this is a comment. check for a tie
		if(computer.toLowerCase() == player.toLowerCase()) {
			//tie - no one wins
			stsatus.textContent = "Tie! You live to shoot another day!";
		}
	}

	trigger.addEventListener("click", playGame);

}) ();