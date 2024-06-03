console.log(`hello world`);

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`what is your name:`, (answer) => {
    console.log(answer.toUpperCase());
    readline.close();
});

