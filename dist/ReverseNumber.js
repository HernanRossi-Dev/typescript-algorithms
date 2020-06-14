"use strict";
function reverse(x) {
    let input = x;
    let result = 0;
    let negative = 1;
    if (input < 0) {
        input = (input * -1);
        negative = x / ((-1) * x);
    }
    if (!input)
        return result;
    let value = input;
    while (input >= 1) {
        value = (input) % 10;
        const digit = Math.trunc(value);
        result = result * 10 + digit;
        input = input / 10;
    }
    if (result > Math.pow(2, 31) - 1)
        return 0;
    return (result * negative);
}
const testCases = [
    [-123, -321],
    [4356, 6534]
];
testCases.forEach(([input, expected]) => {
    const result = reverse(input);
    console.log(result === expected);
});
//# sourceMappingURL=ReverseNumber.js.map