const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const generateMarkdown = require("./generatedMarkdown");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter project description: "
    },
    {
        type: "input",
        name: "installation",
        message: "Enter project installation instructions: "
    },
    {
        type: "input",
        name: "usage",
        message: "Enter project usage information: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter project contribution guidelines: "
    },
    {
        type: "input",
        name: "test",
        message: "Enter project test instructions: "
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "licesne",
        message: "What kind of licesne is your project using?",
        choices: ["MIT", "APACHE", "NONE"],
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("generating your readME");
        writeToFile("READ.md", generateMarkdown({ ...inquirerResponses }))
    })
}

init();