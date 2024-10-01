//Ex.1 => (for loop) Given a number. Print the sum of digits.
let sumOfDigits = 0;
for(let number = +prompt(); number !== 0; number -= Math.floor(number / 10)) {
    sumOfDigits += number % 10;
}
console.log(sumOfDigits);

//Ex.1 => (while loop)
let num = +prompt('enter a number');
if(num < 0) {
    num = - num;
}
let sumOfDigits = 0;
while(num !== 0) {
    let digit = num % 10;
    sumOfDigits += digit;
    num = (num - digit) / 10;
}
console.log(sumOfDigits);

//Ex.2 => (for loop)Given a number. Print the multiplication of digits.
let num = +prompt();
if(num < 0) {
    num = - num;
}
let multip = 1;
for(let a = 0; num !== 0; num = Math.floor(num / 10)) {
    let digit = num % 10;
    multip *= digit;
}
console.log(multip);

//(while loop)
let num = +prompt();
if(num < 0) {
    num = - num;
} 
let multip = 1;
while(num > 0) {
    let digit = num % 10;
    multip *= digit;
    num = Math.floor(num / 10);
}
console.log(multip);

/* Ex.3 => (for loop) Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder. */
let number = +prompt('Enter a number.');
if(number === 0) {
    console.log('Cannot be calculated');
} else {
    let product = 1, sum = 0;
    if(number < 0) {
        number = - number;
    }
    for(let a = 0; number > 0; number = Math.floor(number / 10)) {
        let digit = number % 10;
        product *= digit;
        sum += digit;
    }
    if(product % sum === 0) {
        console.log('Quotient is ' + product / sum);
    } else {
        console.log('Remainder is ' + product % sum);
    }
}

//(while loop)
let number = +prompt('Enter a number.');
if(number === 0) {
    console.log('Cannot be calculated');
} else {
    let product = 1, sum = 0;
    if(number < 0) {
        number = - number;
    }
    while(number > 0) {
        let digit = number % 10;
        product *= digit;
        sum += digit;
        number = Math.floor(number / 10)
    }
    if(product % sum === 0) {
        console.log('Quotient is ' + product / sum);
    } else {
        console.log('Remainder is ' + product % sum);
    }
}




