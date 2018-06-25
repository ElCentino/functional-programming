
const vals = 6;

vals = 10; // not allowed

const list = [3, 5, 6];

list = 10; // not allowed

list[0] = 5 // allowed

const w = Object.freeze([5, 6, 7]);

w = 10 // not allowed

w[3] = 1; // not allowed

/*

    Impure function

*/

function upVals(list) {

    for(var i = 0; i < list.length; i++) {

        list[i] = list[i] * 2;
    }
}

var listVals = [3, 4, 5];


upVals(listVals); // [6, 8, 10]

/* 

    Pure Function

*/

function upVals2(list) {

    var newList = list.slice();

    for(var i = 0; i < newList.length; i++) {

        newList[i] = newList[i] * 2;
    }

    return newList;
}

var newVals = [3, 4, 5];

var newVals2 = upVals2(newVals);
