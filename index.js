const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'characters',
        message: 'What are the letter you want to use? (Cannot be more than three letters.)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What gitshape would you like?',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape to be?'
    }
])