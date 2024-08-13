// console.log('js');
// console.log(console);


// let firstName='angha';
// console.log(firstName)
// console.log(typeof firstName)



let isJsFun= 24 ;
console.log(isJsFun)
console.log(typeof isJsFun)

// let isJsFun= false ;
// console.log(isJsFun)
// console.log(typeof isJsFun)

// we have declared a variable but not defined this comes in undefined 
let college;
console.log(college)
console.log(typeof college)


// null its type is object 
let department=null;
console.log(department)
console.log(typeof department)


// key words 
// var < let < const
// var: we can reassign and redeclare the variable 
// reassign
var lastName ='jain';
lastName ='angha';
console.log(lastName)
// redclare
var fruit='mango';
// console.log(fruit)
var fruit='apple';
console.log(fruit)


// let it can assign but not redclare 
let abc ="angha";
abc= "kartik";
console.log(abc)
// let abc="happy"; this is not possible 

// const : redeclare and reassign both are not possible 
const due="date ";
// due="happy"; this is not possible 
console.log(due)
// const due ="happy"; this is not possible 


// operators 
// arithematic (+,-,%,/, exp or**)
// assignment (=,+=,-=,*=,/=)
let x=5;
// x=x+5 or x+=5 is same
x+=5;
console.log(x) 
// logical 
// comparison(==,===,!=,!==,>,<,>=,<=)
const a=5;
const b='5';
console.log(a==b)
// == this is loose equality and === strict equality 
// loose quality will not check the data type but strict equality will check
 console.log(5!='5')  //this is  loose not equality
 console.log(5!=='5')// this is strict not equality


//  promt and alert 
 const userName = prompt('enter your name ');
console.log(userName);
const password=prompt("enter password ");
console.log(password);
if (userName ==='admin' && password==="admin@123") {
    console.log("authentication sucessfull");
    
} else {
    console.log("authentication failed");
    alert("warning");
    
}


// 
const c=3+'3';
console.log(c)
