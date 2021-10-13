
const {printStringRed, printStringPurple,getCurrentDateTime, printStringBlue,printStringGreen, printTextBox, checkValidNumber,
    checkValidPin
} = require("./utility");


let allCustomers = new Map();

let allTransactions = new Map();


function updateMap(customer){
    allCustomers.set(customer.username, customer);

}
function newCustomer(){




    const customer = new Object();
    customer.name = '';
    customer.address = 'address';
    customer.phone_number = 'phone';


    customer.username = '';
    customer.password = '';

    customer.initialDeposit = '';

    customer.pin = '';

    let savingsBucket = new Object();
    savingsBucket.currentBalance = '';
    customer.savings = savingsBucket;

    return customer;
}



function createNewAccount(){



    let customer = newCustomer();

    const prompt = require('prompt-sync')();
    const name = prompt('Name: ');

    const address = prompt('Address: ');
    const phoneNumber = prompt('Phone Number: ');
    let username = prompt('Username: ');

    while(allCustomers.has(username)){
        console.log("This username exists, please select a different username")
        username = prompt('Username: ');

    }

    const password = prompt('Password: ');

    console.log('Initial Deposit:')
    let initialDeposit = checkValidNumber();


    console.log('Pin Number: ')
    let pin = '';
    pin = checkValidPin();



    customer.name = name;
    customer.address = address;
    customer.phone_number = phoneNumber;
    customer.username = username;
    customer.password = password;
    customer.pin = pin;

    customer.initialDeposit = initialDeposit;
    customer.savings.currentBalance = initialDeposit;

    allCustomers.set(customer.username, customer);
    allTransactions.set(customer.username, ['Initial Deposit of ' + initialDeposit + ' into the account |' + customer.username +
    '|' + ' on '  + getCurrentDateTime()]);


}
// function checkPhonenumber(input) {
//     var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//     if(inputtxt.value.match(phoneno)) {
//         return true;
//     }
//     else {
//         alert("message");
//         return false;
//     }

function displayCustomerInformation(customer){

    Object.entries(customer).forEach(([key, value]) => {
        let temp = key.charAt(0).toUpperCase() + key.slice(1);

        if(temp != 'Savings'){
            console.log(temp + ': ' + value.toString());

        }
        else{
            process.stdout.write(temp + ': ');

        }
    });

    process.stdout.write(customer.savings.currentBalance.valueOf() + '\n\n');

}

function updatePIN(customer){

    printStringPurple('Please Enter your new pin');
    let newPIN = checkValidPin();
    customer.pin = newPIN;
    printStringGreen('Successfully updated PIN')
}

function displayCustomerCurrentBalance(customer){

    let currentBalance = customer.savings.currentBalance;

    if(parseInt(currentBalance) <= 10){
        printStringRed('Balance Low: ' + currentBalance );

    }
    else {
        printStringGreen('Balance: ' + currentBalance);
    }

}





module.exports = { displayCustomerInformation, createNewAccount, displayCustomerCurrentBalance,updatePIN, allCustomers, updateMap, allTransactions };
