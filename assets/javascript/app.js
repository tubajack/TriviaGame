var correctAnswers = 0; 
var incorrectAnswers = 0;
var notAnswered = 0;

//Set up the timer- Figure out how many seconds the user will get
//Initialize the time to 5 minutes
var limitedTime = 60;
var timeDown; 

$("#time-remaining").append("<h2> Time Remaining: " + "01:00" + "</h2>");
timeSet();

//Get the game to start as soon as the page loads


//timeSet();

//Set up the array of correct answers
function answers(){
    testAllQuestions(form);
}
rightAnswers = ["Waco, TX", "Big 12", "Dr. Pepper", "1886", "Linda Livingstone", 
"Michigan State Spartans", "Golden Wave Band", "McLane Stadium", "Green and Gold", "63",
"1948 and 1950", "Sonja Hogg", "Vivienne Malone-Mayes, Mathematics", "1907", "Kim Mulkey",
"TCU Horned Frogs", "1909", "Bears", "Pro Ecclesia Pro Texana", 
"Ten basketball players who died on their way to playing the University of Texas"];
console.log(rightAnswers.length);

//Loop through each and every question
function testAllQuestions(answers){
    for(var i = 0; i < rightAnswers.length; i++){
        var buttons = i * 4;
        //The inner for loop will be checking through each answer choice to ensure that we have the correct answer
        //for(var it = 0; it < 4; it++){
           
            if(answers[i].value === rightAnswers[i]){
                correctAnswers++;
            }
            else if(answers[i].value !== rightAnswers[i]){
                incorrectAnswers++;
            }
            else{
                notAnswered++;
            }

    
        //}
    }

    finalResults();
}




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
    var convertedTime = timeConvert(limitedTime);

    //Display the converted time
    $("#time-remaining").html("<h2> Time Remaining: " + convertedTime + "</h2>");

    //What happens when we run out of time? 
    if(limitedTime === 0){
        finalResults();
    }
}

function timeConvert(time){
    var minutes = Math.floor(time/60);
    var seconds = time - (minutes * 60);

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(minutes === 0){
        minutes = "00";
    }

    else if(minutes < 10){
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

$("#submitAnswer").on("click", function(e) {
    e.preventDefault();
    var answer = $('form').serializeArray();
    console.log(answer);
    testAllQuestions(answer);
});

function finalResults(){

    $("#time-remaining").hide();

    $("#answers").html("<h3> Number Correct: " + correctAnswers + "<br>" + 
    "Number Incorrect: " + incorrectAnswers + "<br>" 
    + "Unanswered: " + notAnswered + "</h3>");

    console.log(correctAnswers);
    console.log(incorrectAnswers);
    console.log(notAnswered);

}



//Array of question objects
//Compare the answers 

