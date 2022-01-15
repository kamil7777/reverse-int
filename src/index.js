module.exports = function reverse(n) {
    let num = String(Math.abs(n));
    let i = 0;
    let rev = '';
    while (i < num.length) {
        rev = num[i] + rev;
        i = i + 1;
    }
    return rev;

}