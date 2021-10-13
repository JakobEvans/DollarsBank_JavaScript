

function addNumbers(str1, str2){

    return (parseFloat(str1) + parseFloat(str2)).toString();
}
function subtractNumbers(str1, str2){

    return (parseFloat(str1) - parseFloat(str2)).toString();
}

function inputValidPin(){



    ///
    const prompt = require('prompt-sync')();

    let pin = 0;
    let valid = false;
    do {

        const str = prompt('')
        pin = Number(str);
        if (!validatePIN(pin)) {

            printStringRed('Please enter a 4 digit PIN')

        }
        else{
            valid = true;
        }
    }
    while(valid === false);

    return pin.toString();

}



function inputValidPhoneNumber(){



    ///
    const prompt = require('prompt-sync')();

    let phoneNumber = 0;
    let valid = false;
    do {

        const str = prompt('')
        phoneNumber = str;
        if (!validatePhoneNumber(phoneNumber)) {

            printStringRed('Please enter a valid US phone number')
            console.log('Phone Number: ')


        }
        else{
            valid = true;
        }
    }
    while(valid === false);

    return phoneNumber.toString();

}

function inputValidPassword(){



    ///
    const prompt = require('prompt-sync')();

    let password = 0;
    let valid = false;
    do {

        const str = prompt('')
        password = str;
        if (!validatePassword(password)) {

            printStringRed('Please enter a valid password. 8 Characters With Lower, Upper & Special');
            console.log("Password: ")
        }
        else{
            valid = true;
        }
    }
    while(valid === false);

    return password.toString();

}

function validatePhoneNumber (pin) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(pin);
}

function validatePassword (pin) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pin);
}
function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}
function inputValidNumber(){

    const prompt = require('prompt-sync')();

    let userChoice = 0;
    let valid = false;
    do {

        const str = prompt('')
        userChoice = Number(str);
        if (isNaN(userChoice)) {

            printStringRed('Please enter a monetary amount')

        }
        else{
            valid = true;
        }
    }
    while(valid === false);

    return userChoice.toString();

}

function getCurrentDateTime(){
    let date_ob = new Date();

// current hours
    let hours  = date_ob.toLocaleTimeString('en-US')

// // current minutes
//     let minutes = date_ob.getMinutes();
//
// // current seconds
//     let seconds = date_ob.getSeconds();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


// prints date & time in YYYY-MM-DD HH:MM:SS format
//     let dateTime = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + 'PDT');
    let time = (' at ' + hours  + ' PDT');

    let dateTime = date_ob.toLocaleDateString(undefined, options)
    dateTime += time;
    return dateTime;

}

function printStringRed(string){
    console.log('\n' + string.red );
}
function printStringPurple(string){
    console.log('\n'+ string.magenta.underline );
}
function printStringGreen(string){
    console.log('\n' +string.green );
}

function printStringBlue(string){
    console.log('\n' +string.blue );
}

function printTextBox(str){
    process.stdout.write("\n+".blue);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".blue);

    }
    process.stdout.write("+".blue);
    console.log('');
    process.stdout.write("| ".blue);

    process.stdout.write(str.blue);

    process.stdout.write(" |".blue);
    console.log();
    process.stdout.write("+".blue);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".blue);

    }
    process.stdout.write("+\n".blue);


}

module.exports = { getCurrentDateTime, printStringBlue,printStringGreen,printStringPurple,inputValidPhoneNumber, inputValidPassword,printStringRed, printTextBox, inputValidNumber,inputValidPin, subtractNumbers, addNumbers};
