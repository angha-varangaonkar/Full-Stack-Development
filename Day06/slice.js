// topics covered slice ,splice , for each,map

const arr=[12,24,32,4,5,6];
// slice method donot mutate original array
// always get number of elements =lastindex -startindex
// const slicedindex=arr.slice(1,5);
// console.log(slicedindex);
// console.log(arr);


// splice (index ,delete count newelement)add,remove element
// always modify the original array
// const splicedoutput = arr.splice(2,2,8);
// console.log(splicedoutput);
// console.log(arr);



// for each (higher order method )
// accept call back function
// the function which accepts a callback function is called higher order method 
// arrow ()=>{}
// function(){}
// elrefres each element
// arr.forEach((el)=>{
// console.log(el*2);
// })
// it always return undefined
// console.log(forEachoutput);this is undefined 



// Map(higher order methods )
// used to perform some transform on the array always accepts a callback and returns a new array which is the result of the transformation we applied in the callback 
// const mappedoutput=arr.map((el)=>{
//     return el*2;
// })
// console.log(mappedoutput);



// filter (hom)
// const filteroutput=arr.filter((el)=>{
//    return el>2;
//  })
// console.log(filteroutput);
console.log('original',arr);







// find element(hom)
// it will print the first element from iteration performed 
// const findoutput=arr.find((el)=>{
//     return el>2;
//   })
//  console.log(findoutput);



// reverse 
// it will modify the array
// const reverseoutput=arr.reverse((el)=>{
//     return ;
//   })
//  console.log(reverseoutput);
    

//  sort 
// accending a-b and if descending do b-a it is predefined 
// const sortedoutput=arr.sort((a,b)=>{
//     return a-b ;
//   })
//  console.log(sortedoutput);



//  findindex
// it will give the index of first element
// const findindexoutput=arr.findIndex((el)=>{
//     return el>2;
//   })
//  console.log(findindexoutput);


//  every (hom)
// it will check every element and if olny one element is small it will print false 
// const everyoutput=arr.every((el)=>{
//     return el>2 ;
//   })
//  console.log(everyoutput);



//  reduce method 
// used to reduce the array in to single value 
// const reduceoutput=arr.reduce((accumulator,el)=>{
//     console.log(accumulator,el);
//     accumulator=accumulator+el;
//     return accumulator;
//   },0)
//  console.log(reduceoutput);



//NOTE object methods

const country = {
    name : 'Angha',
    age : 25,
}

//Object Keys()

const objectkeys = Object.keys(country);
objectkeys.forEach((key)=>{
    console.log(`${key}:${country[key]}`)
})

// object values()

const objectValues =Object.values(country);
console.log(objectValues);


// OBJECT .assign (target ,source )
// used to mege and 
// always traget value will be used 
  const counrty2={
    language :"hindi"
  }

 Object.assign(country,counrty2);
  console.log(country);



//   object freez
// when you use object .freeez new properties cannot be added
// and exciting properties are not found
 Object.freeze(country)
country.name='us';
console.log(country);


// destructuring  ES6  feature
const pro =['tv','mobile','shirt'];

// const tv=pro[0];
// console.log(tv);


// in case of array this is distruction
const[tv,,shirt]=pro;
console.log(tv,shirt);
