// regex to match the phone number in the format  123-456-7890

var regex = /\d{3}-\d{3}-\d{4}/;


// reverse a string using recursion

function reverse(str) {
    if (str.length <= 1) return str;
        return reverse(str.slice(1)) + str[0];
    }

//find the first unique character in a string

function firstUnique(str) {
    var seen = {};
    for (var i = 0; i < str.length; i++) {
        if (seen[str[i]]) {
            seen[str[i]]++;
        } else {
            seen[str[i]] = 1;
        }
    }
    for (var j = 0; j < str.length; j++) {
        if (seen[str[j]] === 1) return str[j];
    }
    return null;
}

//reverse an array without using the reverse method

function reverseArray(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

















