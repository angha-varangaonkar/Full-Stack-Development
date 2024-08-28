
fetch('https://randomuser.me/api/')
.then((res)=>{
    return res.json();
}).then((data)=>{
    // extracting the data 
    const user =data.results[0];
    const fullname =`${user.name.first} ${user.name.last}`;
    const email =user.email;
    const location =`${user.location.city}, ${user.location.country}`;


    console.log("name ",fullname);
    console.log("email ",email);
    console.log("location ",location);
})

