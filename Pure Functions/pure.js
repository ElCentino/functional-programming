

function bar(x, y) {

    var z; 

    foo(x);

    return [y, z];

    function foo(x) {

        y++;

        z = x * y;
    }
}  // This is a pure function



y;
z;

function foo(x) {

    y++;

    z = x * y;
} //impure function

console.log(bar(2, 5));