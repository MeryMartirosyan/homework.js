/* Ex.1  Given an array of strings and numbers. Print the number of integers and the number of
strings in the array. */
function fn(arr) {
    let countNum = 0, countStr = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            countNum++;
        }
        if(typeof arr[i] === 'string') {
            countStr++;
        }
    }
    const result = `Numbers: ${countNum}, Strings: ${countStr}`;
    return result
}



/* Ex. 2  Write a function which receives an array and a number as arguments and returns a new
array from the elements of the given array which are larger than the given number. */
function fn(arr, num) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result
}
