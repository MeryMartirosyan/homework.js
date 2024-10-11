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
