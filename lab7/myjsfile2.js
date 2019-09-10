function sum(numarray) {
    let sum = 0;
    for(let i=0; i<numarray.length; i++) {
        sum += numarray[i];
    }
    return sum;
}

function multiply(numarray) {
    let res = 1;
    for (let i=0; i<numarray.length; i++) {
        res *= numarray[i];
    }
    return res;
}

function reverse(str) {
    return [...str].reduce((prev,next)=>next+prev);
}

function filterLongWords(arrword, len) {
    let res = [];
    for(let i=0; i<arrword.length; i++) {
        if(arrword[i].length > len)
            res.push(arrword[i]);
    }
    return res;
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

