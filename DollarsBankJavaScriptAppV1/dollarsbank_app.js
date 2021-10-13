//Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;



const {createNewAccount} = require("./src/customer_account");
const {signedInView, mainMenuPrompt, signIn} = require("./src/application_views");

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


        console.log("DOLLARSBANK ATM WELCOMES YOU!!");
        console.log();
        let allCustomers = new Map();




        // console.log(userChoice);
        var isLoggedIn = true;
        do {
            const userChoice = mainMenuPrompt();

            switch (userChoice) {
                case '1':
                    console.log("INSIDE 1")
                    let customer = createNewAccount(allCustomers);
                    // console.log(customer);
                    allCustomers.set(customer.username, customer);

                    break;
                case '2':

                    signIn(allCustomers);

                    break;
                case '3':
                    isLoggedIn = false;
                    break;
                case '4':
                    console.log(allCustomers)
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