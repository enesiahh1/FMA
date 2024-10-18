// 1. The user plays first. Dmth user is X.
// 2. The user always plays correctly
const fs = require('fs').promises;
const inquirer = require('@inquirer/prompts');


async function main(){
    let game = [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ];

    const GAME_FILE = 'game.txt';

    await fs.writeFile(GAME_FILE, gameToString(game));


    userTurn = true;

    while (true){
        if (userTurn){
            await inquirer.confirm({message: 'Your turn. Did you play?'});
            game = stringToGame((await fs.readFile(GAME_FILE)).toString());
        }
        else{
            game = stringToGame((await fs.readFile(GAME_FILE)).toString());

            let possibleMoves = [];

            for (let row = 0; row < 3; row++){
                for (let col = 0; col < 3; col++){
                    if (game[row][col] === '.'){
                        possibleMoves.push([row, col]);
                    }
                }
            }

            const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

            game[move[0]][move[1]] = 'O';

            await fs.writeFile(GAME_FILE, gameToString(game));
        }

        //is the game over?
        const gameResult = getWinner(game);


        switch(gameResult){
            case 'X':
                console.log('Congratulations, you won!');
                return;
            case 'O':
                console.log('Oops, you lost!');
                return;
            case 'T':
                console.log('It is a tie!');
                return;
            default:
                break;
        }

        userTurn = !userTurn;
    }
}

function gameToString(game){
    return game.map(row => row.join(' ')).join('\n');
}

function stringToGame(gameString){
    return gameString.split('\n').map(s => s.split(' '));
}

function getWinner(game){
    //if X has won, return X
    //if O has won, return O
    //if Tie, return T
    //if noone has won, return null

    function allEqual(arr){
        return arr.every(el => el === arr[0]);
    }

    //check rows
    for (let row = 0; row < 3; row++){
        if (game[row][0] !== '.' && allEqual(game[row]))
            return game[row][0];
    }

    //check cols
    for (let col = 0; col < 3; col++){
        let colArray = []
        for (let row = 0; row < 3; row++){
            colArray.push(game[row][col]);
        }

        if(game[0][col] != '.' && allEqual(colArray))
            return game[0][col];
    }

    //check diagonals
    let firstDiagonalArray = []
    let secondDiagonalArray = []
    for (let row = 0; row < 3; row++){
        firstDiagonalArray.push(game[row][row]);
        secondDiagonalArray.push(game[row][2 - row]);
    }

    if(game[0][0] !== '.' && allEqual(firstDiagonalArray))
        return game[0][0];

    if(game[0][2] !== '.' && allEqual(secondDiagonalArray))
        return game[0][2];

    //check for tie
    for (let row = 0; row < 3; row++){
        for (let col = 0; col < 3; col++){
            if (game[row][col] == '.'){
                return null;
            }
        }
    }

    return 'T';
}

main();