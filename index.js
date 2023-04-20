// imported packages
const inquirer = require("inquirer");
const fs = require("fs");

/*
* This program prompts the user for various information that is normally
* provided when creating a project README. It then creates a template
* literal to write the contents of said README and write it to a markdown file.
*/

inquirer
    // prompt the user for information that we will use to populate our README
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username? ",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address? " ,
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
.then((response) => {
        // this constant populates the README by using our above user inputs
        const readmeString = `# ${response.title}
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


## Description

${response.description}

## Table Of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`${response.installation}\`

## Usage

${response.usage}

## License

${response.license} license

## Contributing

${response.contribution}

## Tests

Run the following command, to test the program:

\`${response.tests}\`

## Questions

If you have any questions, please contact me at the following email address: mailto:${response.email}

Here is a link to my GitHub profile: https://github.com/${response.github} 
        `;

        // write the contents of our string to a new README file
        fs.writeFile("./dist/README.md", readmeString, (err) => err ? console.error(err) : console.log("README created!"))
    }
);