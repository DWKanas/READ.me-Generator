//required packages
import inquirer from 'inquirer';
// const inquirer = require('inquirer');
import fs from 'fs';
import generate from './generateReadme.js'

//array of questions to ask
const questions = [
    'What is your GitHub username?',
    'What is your email address?',
    'What is your project\'s name?',
    'Please write a short description of your project:',
    'What kind of license should your project have?',
    'What command should be run to install dependencies?',
    'What command should be run to run test?',
    'What does the user need to know about using the repo?',
    'What does the user need to know about contributing to the repo?'
];
//function to write and generate the README
function writemdFile(data) {
    fs.writeFile('README.md', generate(data), (err) =>
        err ? console.error(err) : console.log('README Generated!')
    
    )
}
//array of inquirer prompts
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'username' 
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email' 
        },
        {
            type: 'input',
            message: questions[2],
            name: 'project' 
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description' 
        },
        {
            type: 'input',
            message: questions[4],
            name: 'license' 
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install' 
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test' 
        },
        {
            type: 'input',
            message: questions[7],
            name: 'repo' 
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contribute' 
        }
    ])
    .then(writemdFile)
}

init()