var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var AIselection= ["rock,paper,scissors"];
    array_rand(AIselection) 
}

// This function picks the winner
 var winnerPoints=0
 var AIpoints = 0
function pickWinner(userValue, aiValue) {
        if(winner=true) {
    winnerPoints = winnerPoints + 1
}else{
      AIpoints= AIpoints +1
}


// This function sets the scoreboard with the correct points
function setScore() {
console.log(winnerPoints);
alert("You have" + winnerPoints + "points");
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){

});
