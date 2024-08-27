// asynchronus behaviour 

// setTimeout:two params onr is call back and other is time it shows how much time will it take to execute 
// webapp then it goes to callbackqueue and then callback satck
// setInterval

// console.log("hello");
// setTimeout(()=>{
//     console.log("this is asynchronus");
// },5000)

// console.log("hellooo");


// callback 
// test= high order function:it accepts callback as a params
// function test (callback){
//     const data ='hello';
//     callback(data);
// }


// this is callback function
// greet=callback function are the passing in the parameters of higher order function
// function greet(data){
//     console.log(data);
// }
// test(greet);

// test((data)=>{
//     console.log(data)
// })


// function test(callback)
// {
//     setTimeout(()=>{
//         const data='hello';
//         callback(data)
//     },3000)
// }



// function step1(callback){
//     setTimeout(()=>{
//         callback();
//         console.log("step 1")
//     },1000)
// }



// function step2(callback){
//     setTimeout(()=>{
//         callback();
//         console.log("step 2")
//     },1000)
// }


// function step3(callback){
//     setTimeout(()=>{

//         console.log("step 3")
//     },1000)
// }
// step1(()=>{
//     step2(()=>{
//         step3()
//     })
// })

// creating promises 

// const wilYouPassInExam = new Promise((resolve,reject)=>{
//     resolve("fail");
// })

// console.log(wilYouPassInExam);

// function fetchData()
// {
//     return new Promise((resolve,reject)=>{
//         const data ="hello we are learning about promises"
//         if (Math.random()>.5) {
//             resolve(data);
            
//         } else {
//             reject('this is rejected ');
            
//         }
//     })
// }
// fetchData().then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })
// console.log(fetchData());


// https://restcountries.com/v3.1/all
// fetch('https://restcountries.com/v3.1/all').then((res)=>{
//     return res.json()
//  }).then((data)=>{
    
//      data.forEach(element => {
//          console.log(element)
//          const h1 = document.createElement('h1')
//          const img = document.createElement("img");
//          img.style.width = '200px'
//          img.src = element.flags.svg
//          h1.innerText = element.name.common;
//          document.body.appendChild(h1)
//          document.body.appendChild(img)
// });
// })


// fetch('https://randomuser.me/api/').then((res)=>{
//     return res.json();
// }).then((data)=>{
//      console.log(data);
// })



async function fetchCountry() {
    try {
        const res =await fetch(' https://restcountries.com/v3.1/all');

        const data =await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error)
        
    }
    
}
fetchCountry();