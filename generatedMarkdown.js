
module.exports = function generateMarkdown(data) {
    return`
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution)
- [License](#license)
- [Test Instructions](#testinstructions)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution Guidelines
${data.contribution}

## License
![${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Test Instructions
${data.test}

## Questions
[MyGitHub Profile](http://www.github.com/${data.github})

You can email me for further inquiries: ${data.email}
    `
}