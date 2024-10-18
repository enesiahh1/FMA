function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
resolve("u bo mut!")
        },2000)
    }) 
}

fetchData().then((data)=>{
    console.log(data);
    
}).catch(()=>{
    console.error("Error",error);
});