 async function getData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
resolve("u bo mut!")
        },2000)
    }) 
}

function fetchData() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
resolve("u bo mut!")
        },2000)
    }) 
}

const response = await getData();
console.log(response)