const fs = require('fs').promises;
const  path = require('path');


//READ  (readFile)
//WRITE (writeFile)
//UPDATE (appendFile)
//DELETE (unlink)

async function main() {
    try{
        const data = await fs.readFile('fajlli.txt');
        console.log(data.toString());
    }
    catch(err){
        throw err;
    }
}

main();