let playerScore = 0;
let computerScore = 0;
let rock_div = document.getElementById("r")
let paper_div = document.getElementById("p")
let scissors_div = document.getElementById("s")
let result_div = document.querySelector(".result")
let playerScore_span = document.getElementById("player-score")
let computerScore_span = document.getElementById("computer-score")
let scoreBoard_div = document.querySelector('.score-board')

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = (Math.floor(Math.random() * 3 )
  return choices[randomNumber]
}

function convertToWord(letter) {
  if(letter === "r") return "Rock"
  if(letter === "p") return "Paper"
  return "Scissors"
}

function win(playerChoice, computerChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore
  computerScore_span.innerHTML = computerScore
  result_p.innterHTML = convertToWord(playerChoice) + "beats" + computerChoice + ". You win!"
}

function lose() {
  
}

function game(playerChoice) {
  const computerChoice = getComputerChoice()
  switch (playerChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(playerChoice, computerChoice);
      break;
  }
}

function main() {
  paperButton.addEventListener('click',function() {
    game('p')
  })

  rockButton.addEventListener('click',function() {
    game('r')
  })

  scissorsButton.addEventListener('click',function() {
    game('s')
  })
}

main()