// variable to call inquirer npm
const inquirer = require("inquirer");

// variable to use fs module
const fs = require("fs");

// variable to link ReadMe format file
const readmeFormat = require("./utils/generateMarkdown")

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// array of questions for user
const questions = [{
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give a short description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What's the installation procedure for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will the project be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Choose an aopen source license: ISC, MIT, GNU GPL v3 or Unlicense?",
        name: "license"
    },
    {
        type: "input",
        message: "How will the project be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Are there any contributors for your project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "Provide a URL/s for a demo/snapshots of your project.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub profile name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the deployed URL of your project?",
        name: "url"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err
        console.log("ReadMe successfully generated!");
    });
}

// function to initialize program
function init() {
    // function to resolve promise after user answered all the inquirer prompts
    inquirer.prompt(questions).then(input => {
        writeToFile("ReadMe.md", readmeFormat(input));
    });
};

// function call to initialize program
init();