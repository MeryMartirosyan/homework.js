/* Ex.1 => Given an age, figure out whether someone is a baby(1 months - 12 months), 
toddler (1 year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or 
adult(18 years and more ). Also check that age in months is between 1 and 12.  */
let givenAge = +prompt('Enter the age.');
let yearsOrMonths = prompt('Enter months or years.');
if(givenAge >= 1 && givenAge <= 12 && yearsOrMonths === 'months') {
    console.log('baby');
} else if(givenAge >= 1 && givenAge <= 2 && yearsOrMonths === 'years') {
    console.log('toddler');
} else if(givenAge >= 3 && givenAge <= 12 && yearsOrMonths === 'years') {
    console.log('child');
} else if(givenAge >= 13 && givenAge <= 17 && yearsOrMonths === 'years') {
    console.log('teenager');
} else if(givenAge >= 18 && yearsOrMonths === 'years') {
    console.log('adult');
} else {
    console.log('invalid input, try again.');
}



/* Ex.2 => Given three numbers. Sort them by the ascending order. */
const number1 = +prompt('enter number');
const number2 = +prompt('now second one');
const number3 = +prompt('now third');
if(number1 < number2 && number2 < number3) {
    console.log(number1, number2, number3);
} else if(number2 < number1 && number1 < number3) {
    console.log(number2, number1, number3);
} else if(number3 < number2 && number2 < number1) {
    console.log(number3, number2, number1);
} else {
    console.log('invalid input');
}
