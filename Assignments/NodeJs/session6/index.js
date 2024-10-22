const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const basePath = path.join(__dirname, "public");
const PORT = 8191;

const server = http.createServer( async(req, res) => {
    let url = req.url;
    if(url == '/' || url == ''){
     url = 'index.html'
    }
});


async function  GET(url) {
    
    switch(req.method){
        case "GET":
            GET(url, req, res);

        break;
        case "POST":
            POST(url, req, res);
            break;
    }

}

async function GET(url, req, res) {
    const filePath = path.join(basePath, url)
    try{
        const file = await fs.readFile(filePath)
        res.write(file)
        res.end()
    } catch(err){
        const errFile = await fs.readFile(path.join(basePath , '404.html'));
        res.write(errFile)
        res.end()
    } finally{
        res.end()
    }
}

async function POST(url, req, res) {
    var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    console.log(body);
  });
}
server.listen(PORT)