// Included packages
const fs = require('fs');
const inquirer = require('inquirer');
// const {generateMarkdown} = require('./utils/generateMarkdown');
const {generateMarkdown, renderLicenseBadge, renderLicenselink} = require ('./utils/generateMarkdown.js');

// validate the user input
const validateUserInput = (value) => {
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
            "Apache 2.0",
            "BSD3",
            "BSD2",
            "GNU GPLv3",
            "GNU LGPL",
            "MIT",
            "Mozilla 2.0",
            "None"
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
            if ("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]+$") {
                return true;
            } else {
                return "Please enter a valid email address."
            };
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
};

// function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.renderLicenseBadge = renderLicenseBadge(data.license);
        data.renderLicenselink = renderLicenselink(data.license);
        writeToFile("README.md", data);
    });
};

// Function call to initialize app
init();
