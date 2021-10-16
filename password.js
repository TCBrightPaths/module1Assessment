const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.setPrompt("Welcome. Please enter your password.");
reader.prompt();
reader.on('line', (input) => {
   if(input.length >= 10 ) {
       console.log("Success!");
   } else {
       console.log("Password is too weak. Try again.");
   }
   reader.close();
});

//