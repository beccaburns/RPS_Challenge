let playerScore = 0;
let computerScore = 0;
let rockButton = document.getElementById('r')
let paperButton = document.getElementById('p')
let scissorsButton = document.getElementById('s')
let gameResult = document.getElementById('result')
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
let scoreBoard = document.querySelector('.score-board')

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = (Math.floor(Math.random() * 3 )
  return choices[randomNumber]
}

function game(playerChoice) {
  console.log(' ' + playerChoice)
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