const {printStringRed, printStringPurple, printStringBlue,printStringGreen, printTextBox, checkValidNumber, addNumbers,subtractNumbers} = require("./utility");
const {displayCustomerCurrentBalance, allCustomers, updateMap, allTransactions} = require("./customer_account");


function depositFunds(customer){


    console.log('\n'+ 'How much would you like to deposit?'.magenta.underline + '\n');

    let depositAmount = checkValidNumber();

    let finalAmount = addNumbers(customer.savings.currentBalance, depositAmount)
    //change the balance
    customer.savings.currentBalance = finalAmount;

    printStringGreen('Successfully deposited ' + depositAmount + ' into the account |' + customer.username + '|')
    updateMap(customer);


    var transactions =[" apple","orange","pineapple"]

    // allTransactions.set(customer.username, )

}

function withdrawFunds(customer){

    printStringPurple('How much would you like to withdraw?');
    let withdrawAmount = checkValidNumber();
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
        let transferAmount = checkValidNumber();

        // check if withdraw is possible.
        if(parseInt(transferAmount) > parseInt(customer.savings.currentBalance)){
            printStringRed('Insufficient funds');
        }
        else{
            let newCustomerBalance = subtractNumbers(customer.savings.currentBalance, transferAmount)
            customer.savings.currentBalance = newCustomerBalance;
            updateMap(customer);

            // make temp of other customer to update map
            let tempCustomer = allCustomers.get(otherUsername);
            // add the the transfer amount to other account
            let otherCustomerBalance = addNumbers(tempCustomer.savings.currentBalance, transferAmount);
            //set temp to computed balance
            tempCustomer.savings.currentBalance = otherCustomerBalance;
            //update the map with new customer balance
            updateMap(tempCustomer);
            printStringGreen('Successfully transferred funds to user |' + otherUsername + '|')
        }
    }
    //user doesnt exist
    else
    {
        printStringRed('That user does not exist!')
    }
}


function mostRecentTransactions(customer){
    console.log(allTransactions.get(customer.username));
}

module.exports = { withdrawFunds, depositFunds, transferFunds, mostRecentTransactions };
