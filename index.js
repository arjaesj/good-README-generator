// variable to call inquirer npm
const inquirer = require("inquirer");

// variable to use fs module
const fs = require("fs");

// variable to link ReadMe format file
const readmeFormat = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: "input",
        message: "What is your app title?",
        name: "title",
        default: "My App"
    },
    {
        type: "input",
        message: "Please give a short description of your app.",
        name: "description",
        default: "CLI Application"
    },
    {
        type: "input",
        message: "What's the installation procedure for your app? *Add a `</br>` tag after each step.",
        name: "installation",
        default: "Email author: ${data.email}"
    },
    {
        type: "input",
        message: "How will the app be used?",
        name: "usage"
    },
    {
        type: "input",
        message: "Provide a URL/s for a demo/snapshots of your app.",
        name: "demo"
    },
    {
        type: "list",
        message: "Choose an open source license:",
        choices: ["ISC", "MIT", "GNU GPL v3", "Unlicense"],
        default: "Unlicence",
        name: "license"
    },
    {
        type: "input",
        message: "What message would you like to say to your app's would be contributors?",
        name: "contributing",
        default: "none"
    },
    {
        type: "input",
        message: "How do you run a test for your app.",
        name: "test",
        default: "none"
    },
    {
        type: "input",
        message: "What is your full name?",
        name: "fullname"
    },
    {
        type: "input",
        message: "What is your GitHub profile name?",
        name: "githubName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the deployed URL of your app?",
        name: "deployedURL"
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
    inquirer.prompt(questions).then((input, list) => {
        writeToFile("ReadMe.md", readmeFormat(input, list));
    });
};

// function call to initialize program
init();