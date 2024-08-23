const prompt=require("prompt-sync")()

const user1=prompt("enter the number ");

if (user1 %2==0) {
    console.log("number is even");
    
} else if (user1==0) {
    console.log("number is neither even nor odd");
    
}else{
    console.log("number is odd");
}