
const colors = require('colors');
const {displayCustomerInformation, displayCustomerCurrentBalance, updatePIN, allCustomers, printTransactions, checkPIN} = require("./customer_account");
const {withdrawFunds, depositFunds, transferFunds} = require("./dollars_bank_atm");

const {printStringRed, printStringPurple, printStringBlue,printStringGreen, printTextBox} = require("./utility");

function signIn() {

    printTextBox("Enter Login Details")
    const prompt = require('prompt-sync')();
    let password = '';
    let currentCustomer = '';
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

            // console.log('PIN Number:');
            // let pin = inputValidPin(currentCustomer);
            signedInView(currentCustomer);

            printStringGreen('Correct credentials!')

        } else {
            printStringRed('Incorrect credentials!')
        }
    }
}






function signedInView(customer){





    printTextBox('Welcome <' + customer.username + '>');



    let isSignedIn = true;

    do {

        let userChoice = loggedInPrompt(customer);

        switch (userChoice) {
            case '1':
                printTextBox('Deposit');
                displayCustomerCurrentBalance(customer);

                depositFunds(customer);
                // if(checkPIN(customer)){
                //     displayCustomerCurrentBalance(customer);
                //
                //     depositFunds(customer);
                // }
                // else{
                //     printStringRed('Incorrect Pin!')
                // }

                break;
            case '2':

                printTextBox('Withdraw');
                displayCustomerCurrentBalance(customer);

                withdrawFunds(customer);
                break;
            case '3':

                printTextBox('Funds Transfer');
                displayCustomerCurrentBalance(customer);
                transferFunds(customer);
                break;

            case '4':

                printTextBox('5 Recent Transactions');
                printTransactions(customer);

                break;
            case '5':
                printTextBox('Customer Information');
                displayCustomerInformation(customer);
                break;
            case '6':

                printTextBox('Update PIN');
                updatePIN(customer);
                break;

            case '7':

                printStringRed('Logging out...')
                isSignedIn =false;
                break;
        }
    }
    while (isSignedIn === true);



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

    return userChoice.toString();

}
function loggedInPrompt(customer) {
    const prompt = require('prompt-sync')();

    const signedInOptions = ["Deposit Amount:", "Withdraw Amount:", "Funds Transfer:",
        "View 5 Recent Transactions", "Display Customer Information:", "Update PIN", "Sign Out" ];
    let count = 1;

    printStringPurple('\nWhat would you like to do?'.underline)
    displayCustomerCurrentBalance(customer);

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
    printStringPurple('What would you like to do?')
    console.log("(1) Create New Account\n(2) Login\n(3) Exit\n")

    const choice = checkValidInput(3);

    return choice;
}




module.exports = { signedInView, mainMenuPrompt, signIn};
