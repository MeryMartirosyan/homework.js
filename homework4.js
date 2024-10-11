/* Ex.1 ==>>  Given a positive integer. Bring the last digit of the number to the beginning. Print the new
 number. If the last digit of the inserted number is 0, number remains the same. */
function bringLastDigitToFront(number) {
    if(number === 0) {
        console.log(0);
        return 0
    } else {
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        number = String(number);
        let result = '';
        result += lastDigit + number;
        console.log(+result);
        return +result
    }
}

// Ex.2 ==>> Insert a digit and a number. Check whether the digits contains in the number or not.
function checkDigitInNum(number, digit) {
    number = String(number);
    digit = String(digit);
    let result = 'No';
    for(let i = 0; i < number.length; i++) {
        if(number[i] === digit) {
            result = 'Yes';
            break;
        }
    }
    console.log(result);
    return result
}

// Ex.3 ==>> Enter a number. Reverse its first and last digits. Print the new number.
function reverseFirstLast(number) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    number = String(number);
    let firstDigit = number[0];
    let result = lastDigit;
    for(let i = 1; i < number.length; i++) {
        result += number[i];
    }
    result += firstDigit;
    console.log(+result);
    return +result
}

// Ex.4 ==>> Enter a number. Find the difference between its biggest and smallest digits.
function difference(num) {
    num = String(num);
    let max = num[0], min = num[num.length - 1], diff = 0;
    for(let i = 0; i < num.length; i++) {
        if(+num[i] > +max) {
            max = num[i];
        }
        if(+num[i] < +min) {
            min = num[i];
        }
    }
    diff = max - min;
    console.log(diff);
    return diff
}
