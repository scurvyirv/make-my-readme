// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "please provide a description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "how do you install this project?",
        name: "install",
    },
    {
        type: "input",
        message: "for what purpose would you use this project?",
        name: "usage"
    },
    {
        type: "list", 
        message: "what license will this project use?",
        name: "license",
        choices: [
            "none",
            "MIT License", 
            "Apache License 2.0", 
            "Boost Software License 1.0", 
            "Mozilla Public License 2.0",
            "GNU General Public License v2.0"
        ]
    },
    {
        type: "input",
        message: "what are the contribution guidelines", 
        name: "guidelines"
    },
    {
        type: "input",
        message: "what is your github username?", 
        name: "github"
    },
    {
        type: "input",
        message: "what is your email?", 
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => 
        error ? console.log(error) : console.log('successfully created a file!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then (response => {
        const readmeHTML = generateMarkdown(response);
        writeToFile('newReadMe.md', readmeHTML);
    })
}

// Function call to initialize app
init();
