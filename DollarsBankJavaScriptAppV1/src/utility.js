

function addNumbers(str1, str2){

    return (parseInt(str1) + parseInt(str2)).toString();
}
function subtractNumbers(str1, str2){

    return (parseInt(str1) - parseInt(str2)).toString();
}

function checkValidPin(){



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

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}
function checkValidNumber(){

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
    let hours = date_ob.getHours();

// current minutes
    let minutes = date_ob.getMinutes();

// current seconds
    let seconds = date_ob.getSeconds();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


// prints date & time in YYYY-MM-DD HH:MM:SS format
//     let dateTime = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + 'PDT');
    let time = (' at ' + hours + ":" + minutes + ":" + seconds + ' PDT');

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
    process.stdout.write("+".red);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".blue);

    }
    process.stdout.write("+".red);
    console.log('');
    process.stdout.write("| ".blue);

    process.stdout.write(str.blue);

    process.stdout.write(" |".blue);
    console.log();
    process.stdout.write("+".red);

    for (let i = 0; i < str.length+2; i++){
        process.stdout.write("*".blue);

    }
    process.stdout.write("+\n".red);


}

module.exports = { getCurrentDateTime, printStringBlue,printStringGreen,printStringPurple,printStringRed, printTextBox, checkValidNumber,checkValidPin, subtractNumbers, addNumbers};
