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
  const userPicked = e.target.getAttribute('value')
  console.log('User Picked ' + userPicked)

  const indexPicked = Math.floor(Math.random() * options.length)
  const computerPicked = options[indexPicked]
  console.log('Computer Picked ' + computerPicked)

  let result;


  // For the condition of Draw
  if(computerPicked === userPicked){
    result = `Draw`
  }
    // For the condition of win
    else if(winCondition[computerPicked] === userPicked){
      result = `Won`

    }
    else{
      result = `Loss`
    }

  console.log(result)  
  
}

rock.addEventListener('click', handleClick)
paper.addEventListener('click', handleClick)
scissors.addEventListener('click', handleClick)