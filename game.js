let gamePattern = [];
let buttonColours = ["red","blue","green","yellow"];

function nextsequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

// console.log(nextsequence());

let randomChosenColour = buttonColours[nextsequence()];

gamePattern.push(randomChosenColour);

$("#" + randomChosenColour).fadeOut(100).fadeIn(100);