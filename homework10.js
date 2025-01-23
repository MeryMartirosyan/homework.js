/* Given an array. Write a recursive function that removes the
first element and returns the given array. (without using
arr.unshift(),assign second element to first, third element to
second...) */
function fn(arr, array = []) {
    for(let i = 1; i < arr.length; i++) {
        array.push(arr[i]);
    }
    return array
}


function fn(arr, array = [], i = 1) {
debugger;
    if(i === arr.length) {
        return array
    }
    array.push(arr[i]);
    return fn(arr, array, i + 1);
}


/* Given an array of nested arrays. Write a recursive function
that flattens it. (Hint create function that concats arrays). */


