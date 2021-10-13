
const colors = require('colors');
const {createNewAccount} = require("./customer_account");

function printStringRed(string){
    console.log('\n' + string.red + '\n');
}
function printStringPurple(string){
    console.log('\n' +string.magenta + '\n');
}
function printStringGreen(string){
    console.log('\n' +string.green + '\n');
}

function printStringBlue(string){
    console.log('\n' +string.blue + '\n');
}

// function printBoxedText(str){
//     const boxen = require("boxen");
//
//     console.log(boxen(str), {padding: 1})
//
// }
// // can only print one line ,will improve for multi-line strings
// function printFormattedTextBox(str) {
//
//     console.log();
//     process.stdout.write('+');
//     for (let i = 0; i < str.length; i++){
//
//     }
//     // System.out.println();
//     // System.out.printf(ColorsUtility.ANSI_BLUE + "+");
//     //
//     // for (int i = 0; i < str.length() + 2; i++) {
//     //
//     //     System.out.printf("-");
//     // }
//     // System.out.println("+");
//     //
//     // System.out.printf("| " + str);
//     //
//     // System.out.println(" |");
//     //
//     // System.out.printf("+");
//     //
//     // for (int i = 0; i < str.length() + 2; i++) {
//     //
//     //     System.out.printf("-");
//     // }
//     // System.out.println("+");
//     //
//     // System.out.printf(ColorsUtility.ANSI_RESET);
//
// }


function signIn(allCustomers) {

    printStringBlue("\nPlease enter your Username and Password.")
    const prompt = require('prompt-sync')();
    let password = '';
    let currentCustomer
    console.log('Username:');
    let username = prompt('')
    if (!allCustomers.has(username)) {
        printStringRed("This username does not exist.")
    }
    else {
        currentCustomer = allCustomers.get(username);

        console.log('Password:');
        password = prompt('')
        if (currentCustomer.password == password) {
            printStringGreen('Correct credentials!')
            signedInView(currentCustomer);
        } else {
            printStringRed('Incorrect credentials!')
        }
    }
}


function printTextBox(str){
    process.stdout.write("+");

    for (let i = 0; i < str.length; i++){
        process.stdout.write("*");

    }
    process.stdout.write("+");
    console.log('');
    process.stdout.write("|");

    process.stdout.write(str);

    process.stdout.write("|");
    console.log();
    process.stdout.write("*");

    for (let i = 0; i < str.length; i++){
        process.stdout.write("-");

    }
    process.stdout.write("*");


}




function signedInView(Customer){





    console.log('Welcome |' + Customer.username + '|\n');




    let userChoice = loggedInPrompt();
    switch (userChoice) {
        case '1':
            printTextBox('Deposit')

            break;
        case '2':


            break;
        case '3':


            break;

        case '4':


            break;
        case '5':

            break;

        case '6':

            printStringRed('Logging out...')
            break;
    }



}

function checkValidInput(maxChoice){

    const prompt = require('prompt-sync')();

    let userChoice = 0;
    let valid = false;
    do{

        const str = prompt('')
        userChoice = Number(str);
        if(isNaN(userChoice)){

            printStringRed('Please enter a valid number. Choices : 1 --> ' + maxChoice)

        }
        else{
            if(userChoice <= maxChoice && userChoice >= 1){
                valid = true;
            }
            else{
                printStringRed('Please enter a valid choice. Choices : 1 --> ' + maxChoice);

            }
        }

    }
    while(valid === false);

    return userChoice;

}
function loggedInPrompt() {
    const prompt = require('prompt-sync')();

    const signedInOptions = ["Deposit Amount:", "Withdraw Amount:", "Funds Transfer:",
        "View 5 Recent Transactions", "Display Customer Information:", "Sign Out" ];
    let count = 1;

    for(const value of signedInOptions){
        console.log('(' + count + '): ' + value);
        count++;
    }

    // const choice = prompt('')
    const choice = checkValidInput(signedInOptions.length)

    return choice;
}
function mainMenuPrompt() {
    const prompt = require('prompt-sync')();
    // printBoxedText('What would you like to do?')
    console.log( 'What would you like to do?');
    console.log("\n(1) Create New Account\n(2) Login\n(3) Exit\n")

    const choice = checkValidInput(3);

    return choice;
}
module.exports = { signedInView, mainMenuPrompt, signIn};
