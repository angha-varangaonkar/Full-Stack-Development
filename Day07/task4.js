const prompt=require("prompt-sync")()
const num1=parseInt(prompt("enter 1 numbers : "));
const num2=parseInt(prompt("enter 2 numbers :"));
const operator=prompt("Enter the operation +,-,*,/");
  if (operator=='+') {
    console.log(num1+num2);
    
  } else if (operator=='-') {
    console.log(num1-num2);
    
  } 
  else if (operator=='*') {
    console.log(num1*num2);
    
  } 
  else if (operator=='/') {
    console.log(num1/num2);
    
  } 
  else{
    console.log("invalid input");
  }


