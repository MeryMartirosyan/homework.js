/* Ex.1 Given an array of numbers. Print frequency of each unique number. (Frequency is the
count of particular element divided by the count of all elements) */
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
