const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.setPrompt("Welcome. Please enter your password.");
reader.prompt();

reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	


	
	// This line closes the connection to the command line interface.
	reader.close()

});