const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const userScore = document.querySelector('.userScore')
const computerScore = document.querySelector('.computerScore')
const userPick = document.querySelector('.userPick')
const computerPick = document.querySelector('.computerPick')
const status = document.querySelector('.status')
const clear = document.querySelector('.clear')


const winCondition = {"rock": "paper", "paper" : "scissors", "scissors" : "rock"}
const options = ['rock', 'paper', 'scissors']

const updateScore = (score) => {
let result

  if(score === userScore){
    result = Number(localStorage.getItem("userScore")) + 1 || 1
    localStorage.setItem("userScore", result)
    userScore.textContent = `User : ${result}`
  }

  if(score === computerScore){
    console.log(computerScore)
    result = Number(localStorage.getItem("computerScore")) + 1 || 1
    localStorage.setItem("computerScore", result)
    computerScore.textContent = `Computer : ${result}`
  }
}


const handleClick = (e) => {
  const indexPicked = Math.floor(Math.random() * options.length)
  const userPicked = e.target.getAttribute('value')
  const computerPicked = options[indexPicked]

  userPick.textContent = `You : ${userPicked}`
  computerPick.textContent = `Computer : ${computerPicked}`

  // For the condition of Draw
  if(computerPicked === userPicked){
    status.textContent = `You Drew`
  }
    // For the condition of win
    else if(winCondition[computerPicked] === userPicked){
      status.textContent = `You Won`
      updateScore(userScore)

    }
    // For the condition of loss
    else{
      status.textContent = `You Lost`
      updateScore(computerScore)
    } 
  
}

const clears = () => {
  localStorage.clear();
  userScore.textContent = `User : 0`
  computerScore.textContent = `Computer : 0`
}

rock.addEventListener('click', handleClick)
paper.addEventListener('click', handleClick)
scissors.addEventListener('click', handleClick)
clear.addEventListener('click', clears)