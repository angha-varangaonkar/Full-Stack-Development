const prompt=require("prompt-sync")()

let job_input =prompt("enter your job is government / private / businnes  ");

function salaryinput(input){
    input = input.trim().toUpperCase();
    if (input.endsWith("K")) {
        return parseFloat(input.slice(0,-1))*1000;
        
    } else if(input.endsWith("L")){
        return parseFloat(input.slice(0,-1))*100000;
        
    }
    else{
        return parseFloat(input);
    }
}
switch (job_input.trim().toLowerCase()) {
    case "government":
        const salarry=prompt("enter your salary  ");
        const salary=salaryinput(salarry);
        if (salary>=50000) {
            console.log("you can apply for the loan");
            
        } else {
            console.log("you can not apply for the loan ");
        }
        break;
    
    case "businnes":
        const turnover=prompt("enter your yearly turnover  ");
        const turnover1=salaryinput(turnover);
        if (turnover1 >=200000) {
            console.log("you can apply for the loan");
            
        } else {
            console.log("you can not apply for the loan ");
        }
        break;
    
     case "private":
        console.log("no loan available ");
        break;

    default:
        console.log("invalid details")
        break;
}