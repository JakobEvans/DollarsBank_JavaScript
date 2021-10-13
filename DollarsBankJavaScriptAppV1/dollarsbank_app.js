//Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;



const {createNewAccount} = require("./src/customer_account");

const { mainMenuPrompt, signIn} = require("./src/application_views");
const {printStringRed, printStringPurple, printStringBlue,printStringGreen, printTextBox} = require("./src/utility");

// const readline = require('readline');
//
// function mainMenuPrompt() {
//     const r1 = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//
//     })
//     r1.question('What would you like to do?\n(1) Create New Account\n(2) Login\\n(3) Exit\n', function (choice){
//         return choice;
//     })
//

// }





    function startApplication() {

        printTextBox('DOLLARSBANK ATM WELCOMES YOU!!');
        console.log();




        // console.log(userChoice);
        var isLoggedIn = true;
        do {
            const userChoice = mainMenuPrompt();

            switch (userChoice) {
                case '1':
                    createNewAccount();
                    // console.log(customer);

                    break;
                case '2':

                    signIn();

                    break;
                case '3':
                    printStringRed('Exiting...')
                    isLoggedIn = false;
                    break;
                case '4':
                    console.log()
                default:
                // code block
            }

        }
        while(isLoggedIn);
        // console.log("Enter a valid choice ( 1--> Transaction,  2 --> Open New account)")

    }





startApplication();


// @kenorb this is ES6 , use JSON.stringify([...map]);
// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//
//     //Set the response HTTP header with HTTP status and Content type
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

//listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });