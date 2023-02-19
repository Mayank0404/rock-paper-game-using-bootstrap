const choices=document.querySelectorAll(".choice")
const score=document.querySelector("#score")
const result=document.querySelector("#result")
const restart=document.querySelector("#restart")
const modal=document.querySelector(".modal")

const scoreBoard={player:0,computer:0}


window.addEventListener("click",clearModal)
choices.forEach(choice=>choice.addEventListener("click",playGame))

function playGame(e){
    restart.style.display='inline-block'
    const playerChoice=e.target.id
    const computerChoice=getComputerChoice()
    let winner=getWinner(playerChoice,computerChoice)
    showWinner(winner,computerChoice)
 }

function getComputerChoice(){
    const randomNumber=Math.random()*100
    if(randomNumber<33)
    return 'rock'
    else if(randomNumber>=33 && randomNumber<=66)
    return 'paper'
    else
    return 'scissors'
}

function getWinner(p,c){
    if(p===c)
    return 'draw'
    else if(p==='rock'){
        if(c==='paper')  
        return 'computer'
       else
       return'player'
      
    }
    else if(p==='paper'){
        if(c==='scissors')
        return 'computer'
        else
        return 'player'


    }
    else if(p==='scissors'){
        if(c==='rock')
        return 'computer'
        else
        return 'player'
         
    }
}

function showWinner(winner,computerChoice){
    if(winner==='player'){
        scoreBoard.player++
        result.innerHTML=`<h1 class="text-win">You win</h1>
        <i class= "fas fa-hand-${computerChoice} fa-10x"/>
        `
    }
    else if(winner==='computer'){
        
        scoreBoard.computer++
        result.innerHTML=`<h1 class="text-lose">You Lose</h1>
        <i class= "fas fa-hand-${computerChoice} fa-10x"/>
        `

    }
    else if(winner==='draw'){
        result.innerHTML=`<h1 >DRAW</h1>
        <i class= "fas fa-hand-${computerChoice} fa-10x"/>`
        

    }
    modal.style.display='block'

}
function clearModal(e){
    if(e.target==modal){
        modal.style.display='none'

    }

}