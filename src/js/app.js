let playerScore = 0;
let computerScore = 0;
let rockButton = document.getElementById('r')
let paperButton = document.getElementById('p')
let scissorsButton = document.getElementById('s')
let gameResult = document.getElementById('result')
let playerScore = document.getElementById('player-score')
let computerScore = document.getElementById('computer-score')
let scoreBoard = document.querySelector('.score-board')

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