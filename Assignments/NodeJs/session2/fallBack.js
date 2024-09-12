function fetchDate(callback) {
    setTimeout(()=>{
        callback("data receiced!");
    },10000);
}

console.log("Fetching data...");

fetchDate((data)=>{
    console.log(data);
})

console.log("Other code running")