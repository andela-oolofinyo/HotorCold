
var getRandom = function () {
	var randomNumber = Math.ceil(Math.random() * 100);
	return randomNumber;
}

var computerChoice = getRandom();
console.log( "secret number is: " + computerChoice );


var submit= document.getElementById('semi-button');

//user input to be saved
var pick = function () { 
  var userPick = document.getElementById('user-entry');

  if ( !isNaN(userPick.value) && userPick.value >= 0 && userPick.value <= 100 ) {
    var userChoice = userPick.value;
    return userChoice;
  }else {
    document.getElementById("user-feedback").innerHTML = "Please, Entry is Invalid. Refresh Page";
    return false;
  }
}
var difference = function (userChoice) { //userchoice is to replace difference wherever it is called. Line 46.
  var newDifference = Math.ceil(userChoice - computerChoice); 
  return newDifference;
}
var newComparison = function (newDiff) {
    console.log(newDiff);
    if ( newDiff == 0 ) {
      document.getElementById("user-feedback").innerHTML = "You guessed right!!!";
    }
    else if ( newDiff < 0 ) {
      document.getElementById("user-feedback").innerHTML = "You're getting colder, C'mon!";
    }
    else {
      document.getElementById("user-feedback").innerHTML = "You're getting hotter!";
    }
    // return false;
 }
var number = function(e) {
  e.preventDefault();
  var userPick = pick();
  if (userPick != false) {
    var diff = difference(userPick); //refer back to line 28.
  newComparison(diff);
  }
}

submit.addEventListener('click', number);