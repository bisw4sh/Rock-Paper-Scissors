const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const userScore = document.querySelector('.userScore')
const computerScore = document.querySelector('.computerScore')
const userPick = document.querySelector('.userPick')
const computerPick = document.querySelector('.computerPick')
const status = document.querySelector('.status')


const winCondition = {"rock": "paper", "paper" : "scissors", "scissors" : "rock"}
const options = ['rock', 'paper', 'scissors']


const handleClick = (e) => {
  const indexPicked = Math.floor(Math.random() * options.length)
  const userPicked = e.target.getAttribute('value')
  const computerPicked = options[indexPicked]

  console.log(`User picked ${userPicked} and Computer picked ${computerPicked}`)

  // For the condition of Draw
  if(computerPicked === userPicked){
    status.textContent = `You Drew`
  }
    // For the condition of win
    else if(winCondition[computerPicked] === userPicked){
      status.textContent = `You Won`

    }
    // For the condition of loss
    else{
      status.textContent = `You Lost`
    }

  
}

rock.addEventListener('click', handleClick)
paper.addEventListener('click', handleClick)
scissors.addEventListener('click', handleClick)