

module.exports = function generateMarkdown(data) {
    return`
# ${data.title}

![${data.licesne}](https://img.shields.io/badge/license-${data.licesne}-green)

## Description
${data.description}

## Table of Contents
- [Installation](#installation)

    `

}



function generateMarkdown(data) {
    return`
    ##Description
    ${data.description}

    ##GitHub User
    ${data.GitHub}

    ##GitHub Email
    ${data.userEmail}

    ##User License
    ${data.licesne}    
    `
}