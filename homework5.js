/* Ex.1 ==>> Write a function that accepts a string(a sentence) as a parameter and finds the longest
word within the string․ If there are several words which are the longest ones, print the
last word (words can be separated by space). */ 
function theLongestWord(sentence) {
    let word = '', word2 = '', result = '';
    for(let i = 0; i < sentence.length; i++) {
        if(sentence[i] !== ' ') {
            word += sentence[i];
        }
        if(sentence[i] === ' ') {
                if(word.length > word2.length) {
                    result = word;
                }
            word2 = word;
            word = '';
        }
    }
    return result
}

/* Ex.2 ==>> Write a function to find longest substring in a given a string without repeating characters
except space character.
If there are several, return the last one. Consider that all letters are lowercase. */
function longestNotRepeated(str) {          // not completed fully
    debugger;
    let subStr = '', word = '';
    for(let i = 0; i <= str.length; i++) {
        if(str[i] !== str[i + 1]) {
            if(str[i + 1] !== 'undefined' || str[i + 1] !== 'NaN') {
                 word += str[i];
            }
        }
            if(word.length > subStr.length) {
                subStr = word;
                word = '';
        }
    }
    return subStr
}


/* Ex.3 ==>> Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end. */
function changeThree(str) {  
    let subStr = '', result = '';
    for(let i = 0; i < str.length; i+=3) {
        if(str.length - i === 2) {
            result += str[i] + str[i + 1];
        }
     subStr += str[i + 1] + str[i + 2] + str[i];      
        if(subStr !== 'NaN' || subStr !== 'undefined') {
            if(subStr.length <= 3) {
               result += subStr;
            }
        }
        subStr = '';
    }
    return result
}
