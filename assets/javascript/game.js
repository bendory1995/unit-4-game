$(document).ready(function() {
    // declaring and initializing the variable score, wins and losses.
    var score = 0;
    var wins = 0;
    var losses = 0;
    //Score will apear anywhere from 10 - 39
    var goalScore = Math.floor((Math.random() * 30) + 10);

    // every gem will have a random value 
    var redGemVal = Math.floor((Math.random() * 10) + 1);
    var yellowGemVal = Math.floor((Math.random() * 10) + 1);
    var greenGemVal = Math.floor((Math.random() * 10) + 1);
    var blueGemVal = Math.floor((Math.random() * 10) + 1);

    // showing the goalScore
    $(".scoreGoal").append(goalScore);

    // when a user clicks red Gem
    $(".redGem").on("click", function() {
    //adds a redGemVal to the current score
    score = score + redGemVal;
    // prints out the score
    $("#yourScore").html(score);

    //win condition 
    if (score == goalScore){
        // win count goes up
        wins++;
        // print win count
        $("#win").html(wins);
        // resetting the goal score, and the current score.
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        //printing current score back to 0 and a random goalScore.
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);

    }
    // lose condition
    else if (score > goalScore){
        // loss count goes up
        losses++;
        // print out loss count
        $("#loss").html(losses);
       // resetting the goal score, and the current score.
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        //printing current score back to 0 and a random goalScore.
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
});
    $(".yellowGem").on("click", function() {
    score = score + yellowGemVal;
    $("#yourScore").html(score);

    if (score == goalScore){
        wins++;
        $("#win").html(wins);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
    else if (score > goalScore){
        losses++;
        $("#loss").html(losses);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
});
$(".greenGem").on("click", function() {
    score = score + greenGemVal;
    $("#yourScore").html(score);

    if (score == goalScore){
        wins++;
        $("#win").html(wins);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
    else if (score > goalScore){
        losses++;
        $("#loss").html(losses);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
});
$(".blueGem").on("click", function() {
    score = score + blueGemVal;
    $("#yourScore").html(score);

    if (score == goalScore){
        wins++;
        $("#win").html(wins);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
    else if (score > goalScore){
        losses++;
        $("#loss").html(losses);
        goalScore = Math.floor((Math.random() * 20) + 10);
        score = 0;
        $("#yourScore").html(score);
        $(".scoreGoal").html(goalScore);
    }
});
});



