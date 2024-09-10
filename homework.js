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

function triangle(angle1, angle2) {   // find third angle of the triangle
    if(angle1 <= 0 || angle2 <= 0) {
         return 'invalid numbers'
  }
    if(angle1 >= 179 || angle2 >= 180) {
         return 'invalid numbers'
   }
   const angle3 = 180 - angle1 - angle2;
   return angle3
}
