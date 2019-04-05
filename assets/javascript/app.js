var correctAnswers = 0; 
var incorrectAnswers = 0;
var notAnswered = 0;

//Set up the timer- Figure out how many seconds the user will get
//Initialize the time to 5 minutes
var limitedTime = 300;
var timeDown; 

$("#time-remaining").append("<h2> Time Remaining: " + limitedTime + "</h2>");
timeSet();

//Get the game to start as soon as the page loads
window.onload = function(){
    

}

//timeSet();

//This function is going to set the interval for us
function timeSet(){
    timeDown = setInterval(timeInterval, 1000); 
}

//This function is going to create the time for us
function timeInterval(){
    limitedTime--;
    //console.log(limitedTime);
    $("#time-remaining").html("<h2> Time Remaining: " + limitedTime + "</h2>");

    //Convert the timer into minutes and seconds form
}

//Array of question objects
//Compare the answers 

