var square = function (x) {
    return x * x;
}

console.log(square(12))

//

var makeNoise = function () {
    console.log(`Pling!`)
}

makeNoise()

//

var power = function (base, exponent) {
    var result = 1
    for (var count = 0; count < exponent; count = count + 1)
        result = result * base;
    return result;
}

console.log(power(2, 10))

//