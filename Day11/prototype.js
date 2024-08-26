const obj ={
    name:"angha"
}
console.log(obj._proto_);


const animal={
    eats :true
}

const rabbit={
    run :true ,
    __proto__:animal   //this is the method of prototyping 
}



// rabbit.__proto__=animal; //tis is second method of prototyping 
console.log(animal);
console.log(rabbit);
console.log(animal.eats);
console.log(rabbit.eats);






const lion =Object.create(rabbit);
console.log(lion.eats);