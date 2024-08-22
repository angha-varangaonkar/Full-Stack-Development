const product =[{
    productName :'TV',
    Category :'electronics ',
    quantity:2 ,
    price:500

},
{
    productName :'TV',
    Category :'electronics ',
    quantity:2 ,
    price:500

}]

const reduceprice=product.reduce((accumulator,item)=>{
    console.log(accumulator);
    return accumulator +(item.quantity*item.price);
   
  },0)
 console.log(reduceprice);
    
