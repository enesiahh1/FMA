const EventEmitter = require('events');
const fs = require('fs');

const myEmitter = new EventEmitter;

function writeFile(title,data){
    
fs.writeFile(`${title}.txt`,data,'utf8',(error)=>{
    if(error){
        console.log('Diqka so nto');
        return;
    }
    console.log('File written successfully');
});
}

myEmitter.on('krijofile',()=>{
    console.log('Po krijojm nje file');
    writeFile('bota','sillet rreth dillit');
})

myEmitter.emit('krijofile')