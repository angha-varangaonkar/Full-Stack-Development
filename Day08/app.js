// document object model (dom)

console.log(document);

// document.getelementByID
// it gets converterd into object
// const heading=document.getElementById('heading');
// console.log(heading);
// console.dir(heading);

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


// onclick onchange onselect

// document.querySelector
const list2=document.querySelector('.special');
console.log(list2);


// document.querySelectorAll
console.log("new")
const list3=document.querySelectorAll('.special');
console.log(list3)

list3.forEach((el)=>{
    console.log(el.innerText);
})



const heading=document.getElementById('heading');
console.log(heading);
console.dir(heading);

// text content :it gives the text as it is without appliying any css
heading.textContent='dom';
//inner text always preverse the css
heading.innerText='dom2';

// body access
// console.log(document.body.textContent);//as it is content nikal ke dedeta hai
console.log(document.body.innerText);//no spacing left
// used toinsert the html
heading.innerHTML=`<span>hello</span>`;

const container=document.querySelector('#container');

container.innerHTML=`<h1>services</h1>`;



// reading the herf and src attributes of the anchor and img tag

const a=document.querySelector('#address');
a.href='https://github.com/angha-varangaonkar';

const b=document.querySelector('#bear-photo');

//img

// changing style using css
heading.style.color='green';
heading.style.fontSize='30px';
heading.style.textDecoration='underline';


// changing attribute using js
// const input =document.querySelector('#bear')
// input.setAttribute('placeholder','enter your name');


// console.log(input.setAttribute('placeholder'));



// events addEventlistener

const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    const px = document.createElement('p');
    px.innerText= 'this is para'
    console.log(px);
    document.body.append(px);
})




