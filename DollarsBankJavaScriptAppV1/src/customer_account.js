
const {printStringRed, printStringPurple,getCurrentDateTime, printStringBlue,printStringGreen, printTextBox, inputValidPassword, inputValidNumber,inputValidPhoneNumber,
    inputValidPin
} = require("./utility");


let allCustomers = new Map();

let allTransactions = new Map();


function printTransactions(customer){

    let currentCustomerTransactions = allTransactions.get(customer.username);
    currentCustomerTransactions.forEach((value) => {
        console.log(value + '\n');
    });
}

function addNewTransaction(customer, transactionText){
    let tempCustomerTransactions = allTransactions.get(customer.username);
    // add new transaction
    tempCustomerTransactions.push(transactionText);

    // tempCustomerTransactions = tempCustomerTransactions.shift();


    allTransactions.set(customer.username, tempCustomerTransactions);
}


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


    // const phoneNumber = prompt('Phone Number: ');
    console.log('Phone Number: ');

    let phoneNumber = '';
    phoneNumber = inputValidPhoneNumber();


    let username = prompt('Username: ');
    while(allCustomers.has(username)){
        printStringRed("This username exists, please select a different username")
        username = prompt('Username: ');

    }

    // const password = prompt('Password: ');
    console.log('Password: ');
    let password = '';
    password = inputValidPassword();



    console.log('Initial Deposit: ');
    let initialDeposit = inputValidNumber();


    console.log('Pin Number: ');
    let pin = '';
    pin = inputValidPin();




    customer.name = name;
    customer.address = address;
    customer.phone_number = phoneNumber;
    customer.username = username;
    customer.password = password;
    customer.pin = pin;

    customer.initialDeposit = initialDeposit;
    customer.savings.currentBalance = initialDeposit;

    allCustomers.set(customer.username, customer);
    allTransactions.set(customer.username, [('Initial Deposit of ' + initialDeposit + ' into the account |' + customer.username +
    '|' + ' on '  + getCurrentDateTime()).green]);


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
function checkValidPhoneNumber(){

}
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
    printStringPurple('Please enter your OLD PIN');
    let oldPin = checkValidPin();

    if(customer.pin === oldPin){
        printStringPurple('Please enter your NEW PIN');
        let newPIN = checkValidPin();
        customer.pin = newPIN;
        printStringGreen('Successfully updated PIN!')
    }


}


function checkPIN(customer, typeOfTransaction) {
    printStringPurple('Please Enter your PIN to ' + typeOfTransaction + ': ')
    let inputPin = checkValidPin();
    if(customer.pin === inputPin) {
        return true;

    }
    else{
        return false;
    }

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

function accountBalanceCheck(customer){
    process.stdout.write("\n+".green);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".green);

    }
    process.stdout.write("+".green);
    console.log('');
    process.stdout.write("| ".green);

    process.stdout.write(('Current Balance: ' + customer.savings.currentBalance).green);

    process.stdout.write(" |".green);
    console.log();
    process.stdout.write("+".green);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".green);

    }
    process.stdout.write("+\n".green);

}





module.exports = {accountBalanceCheck, displayCustomerInformation, createNewAccount, displayCustomerCurrentBalance,updatePIN, checkPIN, allCustomers, inputValidNumber, addNewTransaction, updateMap, allTransactions, printTransactions };
