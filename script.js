const items = document.getElementsByClassName('item');
const container = document.getElementsByClassName('container')[0];
const text = document.getElementsByTagName('h1')[0];
const text2 = document.getElementsByTagName('h2')[0];
const btn = document.getElementById('btn');
const images = ["img/apple.png", "img/orange.png"];
let clicker = 0;
let pointsA = 0;
let pointsO = 0;

function game() {
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", disclose)
  }
  btn.addEventListener("click", restart)
}

function disclose(e) {
  const item = e.target;
  if(item.id == "je1" || item.id == "je2") {
    item.style.background = "rgb(255, 204, 61) url(" + images[0] + ")" + "center center";
    item.style.backgroundSize = "50%";
    pointsA++;
    checkPointsA();
  } else if(item.id == "dw1" || item.id == "dw2"){
    item.style.background = "rgb(255, 204, 61) url(" + images[1] + ")" + "center center";
    item.style.backgroundSize = "50%";
    pointsO++;
    checkPointsO();
  }

  clickCount()
  if(clicker == 0) {

      setTimeout(function(){
        for (var i = 0; i < items.length; i++) {
          items[i].style.background = "rgb(255, 204, 61) url(img/mainIcon.png) center center no-repeat";
          items[i].style.backgroundSize = "70%";
          pointsA = 0;
          pointsO = 0;
        }
      }, 250)

  }
}

function clickCount() {
  if(clicker == 0) {
    clicker++;
  } else if (clicker == 1) {
    clicker = 0;
  }
}

function checkPointsA() {
  if(pointsA == 2) {
    setTimeout(function(){
      text.textContent = "WYGRAŁEŚ"
      text2.textContent = "ONE MORE TIME?"
      container.style.display = "none";
      btn.style.display = "flex"
    }, 250)
    pointsA = 0;
  }
}

function checkPointsO() {
  if (pointsO == 2) {
    setTimeout(function(){
      text.textContent = "WYGRAŁEŚ"
      text2.textContent = "ONE MORE TIME?"
      container.style.display = "none";
      btn.style.display = "flex"
    }, 250)
    pointsO = 0;
  }
}

function restart() {
  container.style.display = "grid";
  text.textContent = ""
  text2.textContent = ""
  btn.style.display = "none"
}

game();
