let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let scoreboard = document.querySelector(".scoreboard");
let turn = document.querySelector("#turn");
let usersco = document.querySelector("#userscore");
let compsco = document.querySelector("#compscore");

const computerchoice = () => {
  let options = ["rock", "paper", "scissor"];
  let ind = Math.floor(Math.random() * 3);
  return options[ind];
}
const drawGame = () => {
  console.log("game is draw");
  turn.innerText = "Game is Draw";
  turn.style.backgroundColor = "#081b31";

}

const showwinner = (userwin) => {
  if (userwin) {

    turn.innerText = "Congratulations You Won";
    turn.style.backgroundColor = "green";

    userscore++;
    usersco.innerText = userscore;

  }
  else {

    turn.innerText = "Sorry,You Loss";
    turn.style.backgroundColor = "red";
    compscore++;
    compsco.innerText = compscore;

  }

}

const playgame = (userchoice) => {

  console.log("userchoice=", userchoice);
  let compchoice = computerchoice();
  console.log("compchoice=", compchoice);

  if (userchoice === compchoice) {
    drawGame();

  }
  else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    }
    else if (userchoice === "paper") {

      userwin = compchoice === "scissor" ? false : true;
    }
    else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {

    console.log(choice);

    const userchoice = choice.getAttribute("id");

    playgame(userchoice);

  });
});
