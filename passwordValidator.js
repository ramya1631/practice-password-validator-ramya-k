const readlineSync = require('readline-sync');

let password;

function isValidPassword(password) {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /\d/.test(password)
    );
}

do
{
    password = readlineSync.question(`Enter a password, of at least 8 characters long, with a number, and a capital letter: `);
    if(isValidPassword(password)) {
        console.log('Password meets the requirements!');
    } else {
        console.log('Password does not meet the requirements.');
        console.log('It must be at least 8 characters long, contain at least one uppercase letter, and one number.');
    }
} while (!isValidPassword);