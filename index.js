const inquirer = require("inquirer");
const path = require()


const questions = [
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


//function to write the readME file using the user input
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// write the function int intitialize the aplpication
function init() {
    inquirer.prompt(questions).then(inquirerResponses); => {
        console.log("generating your readME");
        writeToFile("READ.md", generateMarkdown({ ...inquirerResponses }))
    }
}

init();