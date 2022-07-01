var landscape = function() {
    var result = ``;
    var flat = function(size) {
        for (var count = 0; count < size; count = count + 1)
            result = result + `_`;
    }
    var mountain = function(size) {
        result = result + `/`;
        for (var count = 0; count < size; count = count + 1)
            result = result + `'`;
        result = result + `\\`;
    }
    flat(3)
    mountain(4)
    flat(6)
    mountain(1)
    flat(1)
    return result;
}

console.log(landscape())

// blocos livres

var something = 1
{
    var something =2
}

//