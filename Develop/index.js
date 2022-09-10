// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// validate the user input
const validateUserInput = () => {
    if (value != "") {
        return true;
    } else {
        return "Please answer the question"
    }
};

// an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project.',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter directions for use for your project.',
        validate: validateUserInput,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for this project.',
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to your project?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing instructions for your project.',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?',
        validate: validateUserInput,
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Please enter a valid email address."
            };
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
