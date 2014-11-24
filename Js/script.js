
var getRandom = function () {
	var randomNumber = Math.ceil(Math.random() * 100);
	return randomNumber;
}

var computerChoice = getRandom();
console.log( "secret number is: " + computerChoice );
var userChoice;
var oldDifference;
var newDifference;
var userPick;
var submit;

var number = function() {
  userPick = document.getElementById('user-entry');

  submit= document.getElementById('semi-button');


// function to prompt user to make a guess
// and save user input
var pick = function (e) {
  e.preventDefault();
  if ( !isNaN(userPick.value) && userPick.value >= 0 && userPick.value <= 100 ) {
    userChoice = userPick.value;
  }

  // else alert( "Please, refresh page and make a valid entry" );
  else document.getElementById("user-feedback").innerHTML = "Please, refresh page and make a valid entry";
}

submit.addEventListener( "click", pick );

}
// function to find the difference between the user entry \\
// and the comnputer's choice
var difference = function () {

	newDifference = Math.abs(userChoice - computerChoice); // difference initialization
}

// function to compare computer's choice and user's choice
var comparison = function () {
  if ( newDifference == 0 ) {
    document.getElementById("user-feedback").innerHTML = "You guessed right!!!";
  }

  if ( newDifference > 0 ) {
    document.getElementById("user-feedback").innerHTML = "You're getting hotter!";
  }

}

// function to compare computer choice and user choice after first entry
// by the user
var newComparison = function () {
    if ( newDifference == 0 ) {
      document.getElementById("user-feedback").innerHTML = "You guessed right!!!";
    }

    else if ( newDifference > oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting colder, C'mon!";
    }

    else if ( newDifference < oldDifference ) {
      document.getElementById("user-feedback").innerHTML = "You're getting hotter!";
      oldDifference = newDifference;
    }
  }

// function calls
number();
difference();
comparison();
oldDifference = newDifference;

// while (newDifference > 0) {
//   pick();
//   difference();
//   newComparison(); 
// }