function max(num1, num2) {
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(char) {
    if(char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
        return true
    }
    return false;
}

function sum(numarray) {
    return numarray.reduce((a, b) => a + b);
}

function multiply(numarray) {
    return numarray.reduce((a, b) => a * b);
}

function reverse(str) {
    let reversed = "";
    for(let chr of str){
        reversed = chr + reversed;
    }
    return reversed;
}

function findLongestWord(arrword) {
    return arrword.reduce((a, b) => a.length > b.length ? a : b).length;
}

function filterLongWords(arrword, len) {
    return arrword.filter(function(word){
        return word.length > len;
    });
}

//test case function
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

