const {printStringRed, printStringPurple, printStringBlue,printStringGreen, printTextBox, inputValidNumber, addNumbers,subtractNumbers,
    getCurrentDateTime
} = require("./utility");
const {displayCustomerCurrentBalance, allCustomers, updateMap, allTransactions, addNewTransaction, printTransactions} = require("./customer_account");


function depositFunds(customer){


    console.log('\n'+ 'How much would you like to deposit?'.magenta.underline);
    console.log('Accepted amounts are Bills & Personal Checks of any Amount\nDeposit funds: Format 00.00: ');

    let depositAmount = inputValidNumber();

    let finalAmount = addNumbers(customer.savings.currentBalance, depositAmount)
    //change the balance
    customer.savings.currentBalance = finalAmount;

    printStringGreen('Successfully deposited ' + depositAmount + ' into the account |' + customer.username + '|')
    updateMap(customer);

    // let transactionText = 'Deposit of ' + depositAmount + ' into the account |' + customer.username + '|';
    // transactionText = transactionText.concat('\nBalance - ' + customer.currentBalance + 'as on ' + getCurrentDateTime());
    let transactionText = ('Deposit of ' + depositAmount + ' into the account |' + customer.username + '|'
        + '\nBalance - ' + customer.savings.currentBalance + ' as on ' + getCurrentDateTime()).green;
    addNewTransaction(customer, transactionText);





    // allTransactions.set(customer.username, )

}

function withdrawFunds(customer){

    printStringPurple('How much would you like to withdraw?');
    let withdrawAmount = inputValidNumber();
    if(parseInt(withdrawAmount) > parseInt(customer.savings.currentBalance)){
        printStringRed('Insufficient funds');
    }
    else{
        let finalAmount = subtractNumbers(customer.savings.currentBalance, withdrawAmount)

        //change the balance
        customer.savings.currentBalance = finalAmount;

        printStringGreen('Successfully withdrew ' + withdrawAmount + ' from the account |' + customer.username + '|')
    }


    updateMap(customer);
1
    let transactionText = ('Withdraw of ' + withdrawAmount + ' from the account |' + customer.username + '|'
        + '\nBalance - ' + customer.savings.currentBalance + ' as on ' + getCurrentDateTime()).red;
    addNewTransaction(customer, transactionText);
}

function transferFunds(customer){
    const prompt = require('prompt-sync')();

    printStringPurple('Who would you like to transfer money too?')

    let otherUsername = prompt('');

    if(otherUsername === customer.username){
        printStringRed('You cannot transfer money to your self!')

    }
    // user does exist
    else if(allCustomers.has(otherUsername)){
        printStringGreen('Successfully found the user |' + otherUsername + '|')
        printStringPurple('How much would you like to transfer to ' +  otherUsername + '?');
        let transferAmount = inputValidNumber();

        // check if withdraw is possible.
        if(parseInt(transferAmount) > parseInt(customer.savings.currentBalance)){
            printStringRed('Insufficient funds');
        }
        else{
            let newCustomerBalance = subtractNumbers(customer.savings.currentBalance, transferAmount)
            customer.savings.currentBalance = newCustomerBalance;
            updateMap(customer);

            // make temp of other customer to update map
            let otherCustomer = allCustomers.get(otherUsername);
            // add the the transfer amount to other account
            let otherCustomerBalance = addNumbers(otherCustomer.savings.currentBalance, transferAmount);
            //set temp to computed balance
            otherCustomer.savings.currentBalance = otherCustomerBalance;
            //update the map with new customer balance
            updateMap(otherCustomer);

            //add transaction for giving end
            let transactionText = ('Transfer of ' + transferAmount + ' from the account |' + customer.username +
                '| to the account |' + otherUsername + '|'  + '\nBalance - ' + customer.savings.currentBalance + ' as on ' + getCurrentDateTime()).red;
            addNewTransaction(customer, transactionText);

            //add transaction for receiving end
            let otherTransactionText = ('Received Transfer of ' + transferAmount + ' from the account |' + customer.username +
                '| to your account |' + otherUsername + '|'  + '\nBalance - ' + otherCustomer.savings.currentBalance + ' as on ' + getCurrentDateTime()).green;
            addNewTransaction(otherCustomer, otherTransactionText)

            printStringGreen('Successfully transferred funds to user |' + otherUsername + '|')
        }
    }
    //user doesnt exist
    else
    {
        printStringRed('That user does not exist!')
    }
}



// function openNewAccount(customer){
//
//
// }


// function mostRecentTransactions(customer){
//     printTransactions(customer);
// }

module.exports = { withdrawFunds, depositFunds, transferFunds };
