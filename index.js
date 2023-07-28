let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let newGameBtn = document.getElementById("newGame");

let finalHomeScore = 0;
let finalGuestScore = 0;

function addOneToHome() {
   finalHomeScore += 1;
   homeScore.textContent = finalHomeScore;
}

function addTwoToHome() {
    finalHomeScore += 2;
    homeScore.textContent = finalHomeScore;
}

function addThreeToHome() {
    finalHomeScore += 3;
    homeScore.textContent = finalHomeScore;
}

function addOneToGuest() {
    finalGuestScore += 1;
    guestScore.textContent = finalGuestScore;
 }
 
 function addTwoToGuest() {
     finalGuestScore += 2;
     guestScore.textContent = finalGuestScore;
 }
 
 function addThreeToGuest() {
     finalGuestScore += 3;
     guestScore.textContent = finalGuestScore;
 }

 function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
 }

 
