const fs= require('fs');

const data = 'hello world';

fs.writeFile('example.txt',data,'utf8',(error)=>{
    if(error){
        console.log('Diqka so nto');
        return;
    }
    console.log('File written successfully');
});