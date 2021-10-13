

function newCustomer(){




    const customer = new Object();
    customer.name = '';
    customer.address = 'address';
    customer.phone_number = 'phone';


    customer.username = '';
    customer.password = '';

    customer.initialDeposit = '';

    customer.currentBalance = '';


    return customer;
}



function createNewAccount(allCustomers){



    let customer = newCustomer();

    const prompt = require('prompt-sync')();
    const name = prompt('Name:');

    const address = prompt('Address: ');
    const phoneNumber = prompt('Phone Number: ');
    let username = prompt('Username: ');

    while(allCustomers.has(username)){
        console.log("This username exists, please select a different username")
        username = prompt('Username: ');

    }

    const password = prompt('Password: ');

    const initialDeposit = prompt('Initial Deposit: ');

    customer.name = name;
    customer.address = address;
    customer.phone_number = phoneNumber;
    customer.username = username;
    customer.password = password;
    customer.initialDeposit = initialDeposit;
    customer.currentBalance = initialDeposit;
    return customer

    // const prompt = require('prompt-sync');
    //
    //
    // const properties = [
    //     {
    //         name: 'name',
    //         validator: /^[a-zA-Z\s\-]+$/,
    //         warning: 'Username must be only letters, spaces, or dashes'
    //     },
    //     {
    //         name: 'address',
    //     },
    //     {
    //         name: 'phoneNumber',
    //     },
    //
    //     {
    //         name: 'initialDeposit',
    //     },
    //
    //
    //     {
    //         name: 'username',
    //         validator: /^[a-zA-Z\s\-]+$/,
    //         warning: 'Username must be only letters, spaces, or dashes'
    //     },
    //     {
    //         name: 'password',
    //         hidden: true
    //     }
    //
    //
    //  ];
    // prompt.start();
    //
    //
    // prompt.get(properties, function (err, result) {
    //     if (err) { return onErr(err); }
    //     console.log('Account successfully created:');
    //     console.log('  Name: ' + result.name);
    //     console.log('  Address: ' + result.address);
    //     console.log('  Phonenumber: ' + result.phone_number);
    //     console.log('  InitialDeposit: ' + result.initialDeposit);
    //     console.log('  Username: ' + result.username);
    //     console.log('  Password: ' + result.password);
    //     customer.name = result.name;
    //     customer.address = result.address;
    //     customer.phone_number = result.phone_number;
    //     customer.initialDeposit = result.initialDeposit;
    //     customer.username = result.username;
    //     customer.password = result.password;
    //     return customer;
    //
    // });
    //
    // function onErr(err) {
    //     console.log(err);
    //     return 1;
    // }

}

// console.log(customer);


module.exports = { newCustomer, createNewAccount };
