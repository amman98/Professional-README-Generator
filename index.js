const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username? ",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email? " ,
            name: "email",
        },
        {
            type: "input",
            message: "Enter a project title: ",
            name: "title",
        },
        {
            type: "input",
            message: "Write a short description of your project ",
            name: "description",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies? ",
            name: "installation",
        },
        {
            type: "input",
            message: "What does the user need to know about using this repo? ",
            name: "usage",
        },
        {
            type: "list",
            message: "What kind of license should your project have? ",
            name: "license",
            choices: ["MIT", "ISC", "Apache"],
        },
        {
            type: "input",
            message: "What should the user know about contributing to the repo? ",
            name: "contribution",
        },
        {
            type: "input",
            message: "What command should be run to run tests? ",
            name: "tests",
        },
])
