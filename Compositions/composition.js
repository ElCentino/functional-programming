function mul(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}

var z = mul(3, 5);
z = add(z, 5); // 17

//Above is a manual composition

function compose(fn1, fn2) {

    return function () {

        var args = [].slice.call(arguments);

        return fn2 (
            fn1(args.shift(), args.shift()), 
            args.shift()
        )
    }
}

function mul(x, y) {
    return x * y;
}

function add(x, y) {
    return x + y;
}

var multiNadd = compose(mul, add);

console.log(multiNadd(3, 4, 5)); // 17

//Above is a pure compositional utility

