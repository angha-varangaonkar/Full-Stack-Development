// spread operator is used to copy a array or a object
const arr2=[1,2,3,4,5];
// const arr3=arr2; using this both arr2 and 3 are changed 
const arr3=[...arr2];
console.log(arr3.push(6));
console.log(arr2,arr3);

// adding two array
const clothing=['tshirt' ,'dress'];
const electronics=['tv','ac'];
const shopping=['tshirt',...clothing,...electronics];
console.log(shopping);


// object

const obj1={
    a:1,
    b:2
}

const obj2={
    a:6,
    b:7
}

const obj3={...obj1};
console.log(obj3);

// if we pass the same value in two different objects then the parameters or values passed in the last paratmeter will be printed
const obj4={...obj1,...obj2}
console.log(obj4);



// rest parameter
// it packs the remmaining vale in the array

const numberArray=[1,2,3,4,5];
const[one,two,...others]=numberArray;
console.log(one,two,others);

// DISTRUCTION IN Function 






//this ...el converts the parameters passed into a array
function printNumber(...el)
{
    console.log(el)
    el.forEach((num) => {
        console.log(num)
        
    });
}
printNumber(1,2,3,4);