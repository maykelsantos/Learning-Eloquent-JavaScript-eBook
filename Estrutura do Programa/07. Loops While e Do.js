var number = 0;

while(number <= 12) {
    console.log(number);
    number = number + 2;
}
// 0
// 2
// 4
// 6
// 8
//10

var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// 1024

do {
    var name = prompt(`Who are you?`);
} while (!name);
console.log(name);