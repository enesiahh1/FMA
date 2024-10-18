import inquirer from 'inquirer';

const users = {}; // Store registered users (simple in-memory storage)

async function run() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'Would you like to log in or register?',
        choices: ['Login', 'Register'],
    });

    if (action === 'Register') {
        await register();
    } else if (action === 'Login') {
        await login();
    }
}

async function register() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter a username to register:',
    });

    if (users[name]) {
        console.log('Username already exists. Please try a different one.');
        return;
    }

    const { password } = await inquirer.prompt({
        type: 'password',
        name: 'password',
        message: 'Enter a password:',
        mask: '*',
    });

    users[name] = password;
    console.log('Registration successful! You can now log in.');
}

async function login() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Username:',
    });

    const { password } = await inquirer.prompt({
        type: 'password',
        name: 'password',
        message: 'Password:',
        mask: '*',
    });

    if (users[name] && users[name] === password) {
        console.log('Login successful! Hello, ' + name);
    } else {
        console.log('Wrong credentials. Please try again.');
    }
}

run();
