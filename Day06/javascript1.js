const prompt=require("prompt-sync")()

const age = prompt("enter your age ");
if (age>18) {
    console.log("you are eligible for vote ");
    
} else {
    console.log("you are not eligible ");
    
}