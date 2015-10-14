//Assignment 3, Part 2
/*
//The Rock, Paper, Scissors Game
//STEP 1
//Game is a function in order to restart game in case of a tie or unacceptable user input
var rpsGame = function() {
    var userChoice = prompt("Choose Rock, Paper or Scissors:");
    userChoice = userChoice.toUpperCase();
    
    //STEP 6
    //Check if user input is acceptable, if unacceptable restart game
    if (userChoice !== "ROCK" && userChoice !== "PAPER" && userChoice !== "SCISSORS") {
        alert("Please enter a Rock, Paper, or Scissors!!!, try again!");
        rpsGame();
    } else {
        //STEPS 2, 3
        //Continue with game, generate a Computer choice
        var computerChoice = Math.random();

        if (computerChoice <= 0.33) {
            computerChoice = "Rock";
        } else if (computerChoice <= 0.66) {
            computerChoice = "Paper";
        } else if (computerChoice <= 1.00 ) {
            computerChoice = "Scissors";
        }
        alert("The computer chooses: " + computerChoice);
        

        //STEP 4
        //Compare choices, choose a winner, restart if tie 
        computerChoice = computerChoice.toUpperCase();
        if (computerChoice == "ROCK" && userChoice == "SCISSORS") {
            alert("Rock beats scissors, the Computer wins!");
        } else  if (computerChoice == "SCISSORS" && userChoice == "PAPER") {
            alert("Scissors beat paper, the Computer wins!");
        } else  if (computerChoice == "PAPER" && userChoice == "ROCK") {
            alert("Paper beats rock, the Computer wins!");
        } else if (userChoice == "ROCK" && computerChoice == "SCISSORS") {
            alert("Rock beats scissors, you win!");
        } else  if (userChoice == "SCISSORS" && computerChoice == "PAPER") {
            alert("Scissors beat paper, you win!");
        } else  if (userChoice == "PAPER" && computerChoice == "ROCK") {
            alert("Paper beats rock, you win!");
        } else if (userChoice == computerChoice) { //STEP 5, a tie
            alert("It's a tie!, try again.");
            rpsGame();
        }
    }
}

rpsGame();
*/

/*
//The Basic Calculator
//STEP 1
do {var num1 = prompt("Enter a number:");
    //STEP 2
    var num2 = prompt("Enter a second number:");
    //STEP 3
    var operation = prompt("Would you like to add, subtract, multiply or divide?");
    operation = operation.toUpperCase();
    if (operation !== "ADD" && operation !== "SUBTRACT" && operation !== "MULTIPLY" && operation !== "DIVIDE") {
        alert("You did not enter add, subtract, multiply or divided, please try again.");
    }
    //STEP 4
    function calculate(a, b, c) {
        //STEP 6
        switch(c) {
            case "ADD":
                alert(a + b);
                break;
            case "SUBTRACT":
                alert(a - b);
                break;
            case "MULTIPLY":
                alert(a * b);
                break;
            case "DIVIDE":
                alert(a / b);
                break;
        }
    }

    //STEP 5
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    calculate(num1, num2, operation);
    //STEP 7
} while (operation !== "ADD" && operation !== "SUBTRACT" && operation !== "MULTIPLY" && operation !== "DIVIDE") 
*/

//Death by Javascript 
/*
//STEP 1
function alphaOrder(a) {
    var theWord = a.match(/[abcdefghijklmnopqrstuvwxyz]/ig);
    theWord = theWord.sort();
    theWord = theWord.join("");
    return theWord;
}
console.log(alphaOrder("javascript"));
*/

/*
//STEP 2
function firstLetterUp(a) {
    var theString = a.split(" ");
    for (var index in theString) {
        capFirstLetter = theString[index].charAt(0).toUpperCase();
        theString[index] = theString[index].replace(theString[index].charAt(0), capFirstLetter);
    }
    theString = theString.join(" ");
    return theString;
}

console.log(firstLetterUp("the quick brown fox"));
*/


/*
//STEP 3
function vowelCount(a) {
    var theString = a.match(/[aeiou]/ig);
    theString = theString.join("");
    var vowels = theString.length;
    return vowels;
}

console.log(vowelCount("The quick brown fox"));
*/

/*
//STEP 4
function stringId() {
     var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var charactersLength = characters.length;
     var password = "";
     for (var i = 0; i < 8; i++) {
         password += characters.charAt(Math.round(Math.random() * charactersLength));
     }
     return password;
 }
 
console.log(stringId());
*/

/*
//STEP 5
function longestCountryName(a) {
    var countries = a;
    var countryLength = 0;
    var longestCountry;
    for (var index in countries) {
        if(countries[index].length > countryLength) {
          countryLength = countries[index].length;
          longestCountry = countries[index];
        }
    }
    return longestCountry;
}

console.log(longestCountryName(["Mexico", "Japan", "Canada", "USA", "South Africa"]));
*/

