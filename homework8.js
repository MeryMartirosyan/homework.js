/* Ex.1 ==>Given an array of numbers. 
Print frequency of each unique number.
(Frequency is the count of particular element 
divided by the count of all elements) */
function frequency(arr) {
    debugger
    let result = {}, count = 0;
    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            count++;
        }
        if(arr[i] !== arr[i + 1]) {
            count++;
            result[arr[i]] = (count / arr.length);
            count = 0;
        }
    }
    return result
}

/* Ex.2 ==> Write a function, which receives
an array as an argument which elements arrays of
numbers. Find biggest negative number of each array.
Return product of that numbers.
If there is not any negative number in an array, 
ignore that one. Check that items of the
given array are arrays. */




/* Ex.3 ==> Write a function, which receives two numbers 
as arguments and finds all numbers between
them such that each digit of the number is even. 
The numbers obtained should be printed in a
comma-separated sequence on a single line.*/ 
function fn(a, b) {
    let result = '';
    if(a < b && a >= 1 && b <= 100) {
        for(let i = a; i <= b; i++) {
            if(i % 2 === 0) {
                result += `${i}, `;
            } 
        }
    } else {
        return 'Such numbers does not exist.'
    }
    return result
}
