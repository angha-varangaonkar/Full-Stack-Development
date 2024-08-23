const prompt=require("prompt-sync")()

const user = prompt("enter the number");

if (user%2==0) {
    console.log("number is even");
    
} else {
    console.log("number is odd");
    
}