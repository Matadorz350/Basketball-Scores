
let num1 = 0
let homeScore = document.getElementById("home-Score")
homeScore.textContent = num1;

let num2 = 0
let guestScore = document.getElementById("guest-Score")
guestScore.textContent = num2

let homeTeam = document.getElementById("home-team")
let guestTeam = document.getElementById("guest-team")

//SCORE HOME

function addHome1() {
  num1 += 1 ;
  homeScore.textContent = num1;
  leaderHome();
}

function addHome2() {
  num1 += 2 ;
  homeScore.textContent = num1;
  leaderHome();
}

function addHome3() {
  num1 += 3 ;
  homeScore.textContent = num1;
  leaderHome();
}


//SCORE GUEST

function addGuest1() {
  num2 += 1 ;
  guestScore.textContent = num2;
  leaderGuest()
}

function addGuest2() {
  num2 += 2 ;
  guestScore.textContent = num2;
  leaderGuest()
}

function addGuest3() {
  num2 += 3 ;
  guestScore.textContent = num2;
  leaderGuest()
}


// New Game and reset score
function resetScore() {
  num1 = 0;
  num2 = 0;
  homeScore.textContent = num1;
  guestScore.textContent = num2;
  leaderHome();
}


// Leader
function leaderHome() {
  if (num1 > num2) {
    homeTeam.style.color = "green";
    guestTeam.style.color = "red";
  } else if (num1 == num2) {
    homeTeam.style.color = "white";
    guestTeam.style.color = "white";
  }
}

function leaderGuest() {
  if (num2 > num1) {
    homeTeam.style.color = "red";
    guestTeam.style.color = "green";
  } else if (num2 == num1) {
    homeTeam.style.color = "white";
    guestTeam.style.color = "white";
  }
}

