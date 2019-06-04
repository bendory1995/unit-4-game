$(document).ready(function() {
    var score = 0;
    var wins = 0;
    var losses = 0;
    var goalScore = Math.floor((Math.random() * 20) + 10);
    var redGemVal = Math.floor((Math.random() * 10) + 1);
    var yellowGemVal = Math.floor((Math.random() * 10) + 1);
    var greenGemVal = Math.floor((Math.random() * 10) + 1);
    var blueGemVal = Math.floor((Math.random() * 10) + 1);

    $(".scoreGoal").append(goalScore);

    $(".redGem").on("click", function() {
    score = score + redGemVal;
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



