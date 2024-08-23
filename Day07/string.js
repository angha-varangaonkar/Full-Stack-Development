const str='javascript is language'


// slice
// slice when start is greater than last index we get empty string

console.log(str.slice(5,1));


// sub string it is same as slice but  when start is greater than last index we get the string is reversed
console.log(str.substring(5,1));
console.log(str.charAt(9));
console.log(str.replace('is','are'));



const newstr='   hellooo  ';
console.log(newstr.trim());
// console.log(newstr.trimEnd());
console.log(newstr.indexOf('h'));
// console.log(newstr.indexOf('l'));  this will give the first index of reoccuring letter
console.log(newstr.lastIndexOf('l'));
console.log(newstr.startsWith('h'));
console.log(newstr.endsWith('o'));




const str5='angha';
console.log(str5.split('').reverse().join(''));




