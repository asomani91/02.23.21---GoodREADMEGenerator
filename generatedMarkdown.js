
module.exports = function generateMarkdown(data) {
    return`
# ${data.title}

![${data.licesne}](https://img.shields.io/badge/license-${data.licesne}-green)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [Test Instructions](#testinstructions)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## Questions
[MyGitHub Profile](http://www.github.com/${data.github})

You can email me for further inquiries: ${data.email}
    `
}

// function generateMarkdown(data) {
//     return`
//     ##Description
//     ${data.description}

//     ##GitHub User
//     ${data.GitHub}

//     ##GitHub Email
//     ${data.userEmail}

//     ##User License
//     ${data.licesne}    
//     `
// }