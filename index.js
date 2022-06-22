//required packages
const inquirer = require('inquirer');
const fs = require('fs');

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

function writemdFile(data) {
    fs.writeFile('README.md', generate(data), (err) =>
        err ? console.error(err) : console.log('README Generated!')
    
    )
}