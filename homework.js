let number = 9; // Ex.1 => if the number is odd print odd, if it's even print even
if(number % 2 === 0) {
   console.log('even');
} else if(number % 2 !== 0) {
   console.log('odd');
}

let num1 = 10, num2 = 5; // Ex.2 => if num1 is divisible by num2 print 1, or num2 is divisible by num1 print1, else 0
if(num1 % num2 === 0 || num2 % num1 === 0) {
   console.log(1);
} else {
   console.log(0);
}


