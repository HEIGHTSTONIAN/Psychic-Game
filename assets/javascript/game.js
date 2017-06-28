//i tested and alert for link to html file. alert("we are linked to the html file.") //

//best practice: use double quotes for key variables, and vars declare what i'm accounting for for 
var key = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var turns = 9;
var guess = ""; 

//input recorded once the user lets up from a keystroke. this is assigned to a function that will record the keystroke event. this is the first function once the user is presented with the game so it's the first on the list.//
document.onkeyup = function(event) {
//the key is that math.random will always 'round down' to create the the random number    
    var computerGuess = key[Math.floor(Math.random() * key.length)];
//the computer guess variable is to calculate a random number between 0-0.99999; times the number of keys in the array. then rounds that number down
    console.log(computerGuess);
//REMEMBER that console.log was good for testing variables. SO CRITICAL! 
    var userguess = event.key;


//This if statement is matching the user and computer guesses. == means they're equal. 
    if (userguess == computerGuess) {
//Must remember: ++ is an increment. For this, it's increasing the value of wins each time the code block in the (console.log-style) if statement has been executed//
        wins++;
        turns = 9;
        guess = "";
    } 

//this guess statement decrements values for guesses that don't match up != and cuts turns.
    else if (userguess !== computerGuess) {
        turns--;
//REMEMBER to use the ", " to put a space between the keys pressed when they need a comma between each of "Your Guesses so far"
        guess += userguess + ", ";
    }

//this if statement will increase losses by one up to 9 lives
    if (turns == 0) {
        losses++;
        turns = 9;
        guess = "";
    }

//this var will display the data each time the chain of events occurs. It's one big equation that makes all numbers output simultaneously. 
    var html = "<h2>Guess what letter I'm thinking of</h2>" +
        "<h3>Wins: " + wins + "</h3>" +
        "<h3>Losses: " + losses + "</h3>" +
        "<h3>Guesses Left: " + turns + "</h3>" +
//this switches to a multiple of "guesses" when each .onkeyup occurs//
        "<h3>Your Guesses so far: " + guess + "</h3>";

    document.querySelector('#game').innerHTML = html;
}
