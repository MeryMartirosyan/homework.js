//Ex.1(for loop) Given a number. Print the sum of digits.
let sumOfDigits = 0;
for(let number = +prompt(); number !== 0; number -= Math.floor(number / 10)) {
    sumOfDigits += number % 10;
}
console.log(sumOfDigits);

//Ex.1 (while loop)
