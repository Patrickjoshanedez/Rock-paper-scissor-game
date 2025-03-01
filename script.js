// Initialize scoreboard from local storage
let scoreboard = {
    wins: localStorage.getItem('wins') ? parseInt(localStorage.getItem('wins')) : 0,
    losses: localStorage.getItem('losses') ? parseInt(localStorage.getItem('losses')) : 0,
    ties: localStorage.getItem('ties') ? parseInt(localStorage.getItem('ties')) : 0
};

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    updateScoreboard(result);
    displayScoreboard();
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScoreboard(result) {
    if (result === "You win!") {
        scoreboard.wins++;
    } else if (result === "You lose!") {
        scoreboard.losses++;
    } else {
        scoreboard.ties++;
    }
    localStorage.setItem('wins', scoreboard.wins);
    localStorage.setItem('losses', scoreboard.losses);
    localStorage.setItem('ties', scoreboard.ties);
}

function displayScoreboard() {
    document.getElementById('scoreboard').innerText = `Wins: ${scoreboard.wins}, Losses: ${scoreboard.losses}, Ties: ${scoreboard.ties}`;
}

function resetScoreboard() {
    scoreboard.wins = 0;
    scoreboard.losses = 0;
    scoreboard.ties = 0;
    localStorage.setItem('wins', scoreboard.wins);
    localStorage.setItem('losses', scoreboard.losses);
    localStorage.setItem('ties', scoreboard.ties);
    displayScoreboard();
}

// Display the initial scoreboard
displayScoreboard();
