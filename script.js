const buttons = document.querySelectorAll(".buttons");
const winX = document.getElementById("winnerX");
const winO = document.getElementById("winnerO");
const draw = document.getElementById("draw");


const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    chooseMarkPlayer();
    btn1.classList.add(playerMark);
    board.position1 = playerMark;
    btn1.style.opacity = 100;
    btn1.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
    
})

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    chooseMarkPlayer();
    btn2.classList.add(playerMark);
    board.position2 = playerMark;
    btn2.style.opacity = 100;
    btn2.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
     
})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", function(){
    chooseMarkPlayer();
    btn3.classList.add(playerMark);
    board.position3 = playerMark;
    btn3.style.opacity = 100;
    btn3.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
   
   
})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", function(){
    chooseMarkPlayer();
    btn4.classList.add(playerMark);
    board.position4 = playerMark;
    btn4.style.opacity = 100;
    btn4.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
    
    
})

const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", function(){
    chooseMarkPlayer();
    btn5.classList.add(playerMark);
    board.position5 = playerMark;
    btn5.style.opacity = 100;
    btn5.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
    
    
})

const btn6 = document.getElementById("btn6");
btn6.addEventListener("click", function(){
    chooseMarkPlayer();
    btn6.classList.add(playerMark);
    board.position6 = playerMark;
    btn6.style.opacity = 100;
    btn6.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
  
})

const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", function(){
    chooseMarkPlayer();
    btn7.classList.add(playerMark);
    board.position7 = playerMark;
    btn7.style.opacity = 100;
    btn7.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
 
})


const btn8 = document.getElementById("btn8");
btn8.addEventListener("click", function(){
    chooseMarkPlayer();
    btn8.classList.add(playerMark);
    board.position8 = playerMark;
    btn8.style.opacity = 100;
    btn8.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
      
})

const btn9 = document.getElementById("btn9")
btn9.addEventListener("click", function(){
    chooseMarkPlayer();
    btn9.classList.add(playerMark);
    board.position9 = playerMark;
    btn9.style.opacity = 100;
    btn9.disabled = true;
    setTimeout(computerPlay, 300);
    checkWinner();
     
})



//choose player mark and player to play
let playerRound = true;
let playerMark = "playerMark1";


function chooseMarkPlayer(){
    if(playerRound === true ){
        playerMark = "playerMark1";
        console.log("player ONE played")
        playerRound = false;
        setIsComputerPlaying();
    }else if(playerRound === false && selectedPlayer === "playerTwo" && isComputerPlaying === false){
        playerMark = "playerMark2";
        console.log("player TWO played")
        playerRound = true;
        
    }else if(playerRound === false && selectedPlayer === "computer"){
        playerMark = "playerMark2";
        console.log("computer played")
        playerRound = true;
    }
}



  
  

const board = {
    position1: undefined,
    position2: undefined,
    position3: undefined,
    position4: undefined,
    position5: undefined,
    position6: undefined,
    position7: undefined,
    position8: undefined,
    position9: undefined,
}

function checkWinner(){

    //player X check//

    if(board.position1=== "playerMark1" && board.position2 === "playerMark1" && board.position3 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position1=== "playerMark1" && board.position5 === "playerMark1" && board.position9 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position1=== "playerMark1" && board.position4 === "playerMark1" && board.position7 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position2=== "playerMark1" && board.position5 === "playerMark1" && board.position8 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position3=== "playerMark1" && board.position6 === "playerMark1" && board.position9 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position3=== "playerMark1" && board.position5 === "playerMark1" && board.position7 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position4=== "playerMark1" && board.position5 === "playerMark1" && board.position6 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;
    }else if(board.position7=== "playerMark1" && board.position8 === "playerMark1" && board.position9 === "playerMark1"){
        winX.style.display = "block";
        isComputerPlaying = false;

        //player O check//

    }else if(board.position1=== "playerMark2" && board.position2 === "playerMark2" && board.position3 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position1=== "playerMark2" && board.position5 === "playerMark2" && board.position9 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position1=== "playerMark2" && board.position4 === "playerMark2" && board.position7 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position2=== "playerMark2" && board.position5 === "playerMark2" && board.position8 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position3=== "playerMark2" && board.position6 === "playerMark2" && board.position9 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position3=== "playerMark2" && board.position5 === "playerMark2" && board.position7 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position4=== "playerMark2" && board.position5 === "playerMark2" && board.position6 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position7=== "playerMark2" && board.position8 === "playerMark2" && board.position9 === "playerMark2"){
        winO.style.display = "block";
    }else if(board.position1 != undefined && board.position2 != undefined &&board.position3 != undefined &&board.position4 != undefined &&board.position5 != undefined &&board.position6 != undefined &&board.position7 != undefined &&board.position8 != undefined &&board.position9 != undefined){
        draw.style.display = "block";
    }
}


const restartButtton = document.querySelectorAll(".restart");

restartButtton.forEach(button => {
    button.addEventListener("click", function(){
        winO.style.display = "none";
        winX.style.display = "none";
        draw.style.display = "none";
        for (let i = 1; i <= 9; i++) {
            board[`position${i}`] = undefined;
        }
        removeSymbols();

    });
});


function removeSymbols(){
    for (let i = 1; i <= 9; i++) {
        const button = document.getElementById(`btn${i}`);
        button.classList.remove("playerMark1");
        button.classList.remove("playerMark2");
        button.style.opacity = "0";
        button.disabled = false;
        playerRound = true;
        playerMark = "playerMark1";
    }
}


const secondPlayer = document.getElementById("secondPlayer");

// Check if the selectedPlayer is stored in localStorage
let selectedPlayer = localStorage.getItem("selectedPlayer") || "playerTwo";

// Set the initial selected option
secondPlayer.value = selectedPlayer;

// Add event listener to handle changes in selection in dropdown box
secondPlayer.addEventListener('change', function() {
  selectedPlayer = secondPlayer.value;
  localStorage.setItem("selectedPlayer", selectedPlayer);
  removeSymbols();
  for (let i = 1; i <= 9; i++) {
    board[`position${i}`] = undefined;
  }
   
  console.log(selectedPlayer);
});


function setIsComputerPlaying(){
    if(secondPlayer.value === "computer"){
        isComputerPlaying = !isComputerPlaying;
    
    }
}


let isComputerPlaying = false;

function computerPlay() {
    if (isComputerPlaying === true && selectedPlayer === "computer" && playerRound === false) {
      isComputerPlaying = false;
  
      const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
      const unmarkedButtons = buttons.filter(button => board[`position${button.id.slice(-1)}`] === undefined);
  
      if (unmarkedButtons.length > 0) {
        const randomIndex = Math.floor(Math.random() * unmarkedButtons.length);
        const randomButton = unmarkedButtons[randomIndex];
        randomButton.click();
        
      }
      
     playerRound = true;
    }
  }

  

  