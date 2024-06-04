// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT License':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'Apache License 2.0':
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'Boost Software License 1.0':
            return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
        case 'Mozilla Public License 2.0':
            return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
        case 'GNU General Public License v2.0':
            return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
        default : 
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    switch (license) {
        case 'MIT License':
            return '(https://opensource.org/licenses/MIT)';
        case 'Apache License 2.0':
            return '(https://opensource.org/licenses/Apache-2.0)';
        case 'Boost Software License 1.0':
            return '(https://opensource.org/license/bsl-1-0)';
        case 'Mozilla Public License 2.0':
            return '(https://opensource.org/license/mpl-2-0)';
        case 'GNU General Public License v2.0':
            return '(https://opensource.org/license/gpl-2-0)';
        default : 
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) { 
    let licenseText = '';
    if(license) {
        licenseText =
    `
## License

This program is covered under the [${license}]${renderLicenseLink(license)}.
    `
    }
    return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let {title, description, install, usage, license, guidelines, github, email} = data;
return `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Guidelines](#guidelines)

- [Questions](#questions)

## Installation
${install}

## Usage
${usage}
${renderLicenseSection(license)}
${renderLicenseBadge(license)}

## Guidelines
${guidelines}

## Questions
[link to GitHub](https://github.com/${github})
For more questions, please do not hesitate to reach me at my [email]${email}!

`;
}

module.exports = generateMarkdown;
