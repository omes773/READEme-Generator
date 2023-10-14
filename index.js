
const fs = require("fs");
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown.js");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description of your project",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description.",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for usage. Include screenshots as needed.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Explain the guidelines for contributing to this project?",
    },
    {
        type: "input",
        name: "test",
        message: "Explain the steps needed to run the tests for your project?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices: ["MIT License", "Apache License 2.0", "GNU General Puplic License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Profile Link:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The (Generated)README.md file has beeen created successfully!");
    });
}


async function init() {
    console.log("Starting the (Generated)README.md generator...");


    const answers = await inquirer.prompt(questions);


    let readmeContent = generatorMarkdown(answers);

        
        writeToFile("(Generated)README.md", readmeContent);
}


init();