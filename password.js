const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.setPrompt("Welcome. Please enter your password.");
reader.prompt();
reader.on('line', (input) => {
    if(input.length >= 10) {
        let re = /[0-9]/g;
        if(input.match(re)) {
            console.log("Success!");
        } else {
            console.log("password must contain at least 1 number");
        }
    } else if(input.length < 10) {
        console.log("password must be at least 10 characters long and contain at least 1 number");
    }
  reader.close();
});

//