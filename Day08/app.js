// document object model (dom)

console.log(document);

// document.getelementByID
// it gets converterd into object
const heading=document.getElementById('heading');
console.log(heading);
console.dir(heading);

// document.getElementByTagname
// it always return the html collection which looks like an array but not an array
const para = document.getElementsByTagName('p');
console.log(para);

function printNumber(...el)
{
    console.log(el)
    el.forEach((num) => {
        console.log(num)
        
    });
}
printNumber(para);





//REVIEW - getelementsbyTagName always returns htmlCollection which looks like an array but it is not an array 
//TODO CONVERT HTML COLLECTION 'para' in to an array 
const newpara = [...para];
console.log(newpara);

newpara.forEach((el)=>{
    console.log(el.innerText);
})


//NOTE document.getELementByClassName

const list = document.getElementsByClassName('special');
console.log(list);


// document.getElementByClassName
// document.querySelector
// document.querySelectorAll

