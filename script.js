var flutter = "";
let timer = 30;
let score = 0;
let num;
let totalscore;
let click_music = new Audio("click_sound.wav");
let game_overm = new Audio("losser_sound.wav");

let input = prompt("Enter your Beautiful Name");
document.querySelector(".name").innerHTML = `Welcome to Bubble game ${input}`;
function makebubble() {
  for (i=1; i<=160; i++) {
    var localnum = Math.floor(Math.random() * 10)
    flutter += `<div class="bubble">${localnum}</div>`;
    
  }
  document.querySelector("#zandu").innerHTML = flutter;
};
function runtimmer() {
  var stop = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    }
    else {
      game_overm.play();
      clearInterval(stop);
      document.querySelector("#zandu").innerHTML = `<h1>Game Over Score ${totalscore}</h1>`;

    }
  }, 1000)
}
function getnewhit() {
  num = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = num;
}
function increasescore() {
  click_music.play();
  totalscore = score += 10;
  document.querySelector("#score").textContent = score;
}
document.querySelector("#zandu").addEventListener("click", function (details) {
  let value = Number(details.target.textContent);
  if (value === num) {
    increasescore();
    getnewhit();
  }
});

increasescore();
getnewhit();
makebubble();
runtimmer();

