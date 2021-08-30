module.exports = function check(str, bracketsConfig) {
    let array = [];
    for (let bracket of bracketsConfig) {  
        array.push(bracket.join(''))
        };
    for (let i = 0; i < array.length; i++) {
        if (str.includes(array[i])) {
            str = str.replace(array[i], '');
            i =- 1;
            }
        };
 return str.length === 0;
}
