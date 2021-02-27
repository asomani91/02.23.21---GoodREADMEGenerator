// create a function that returns a license badge based on user pick of licesne if none return something

// create a function that returns the license link based on user pick of none return something

// create a function that returns the license section of the readMe if there none return something

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