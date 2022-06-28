const testData = {
  title: "Test Project",
  description: "This is a short description of the project.",
  installation: "These are installation instructions",
  usage: "These are the usage instructions",
  contribute: "These are the instructions for making contributions.",
  tests: "These are the instructions for testing.",
  confirmLicense: true,
  license: "MIT",
  github: "MosNes",
  repoLink: "https://github.com/MosNes/readme-generator-app",
  email: "7hekarl@gmail.com"
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let userRepo = data.repoLink.split('/')[4];
  return `
  # ${data.title}

  ## Badges
  
  ${renderLicenseBadge()}
  
  ![${userRepo}](https://img.shields.io/github/languages/top/${data.github}/${userRepo})
  
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ---
  
  ## Contributing
  
  ${data.contribute}
  
  ## Testing
  
  ${data.testing}
  
  ## Questions
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
};

console.log(generateMarkdown(testData));

module.exports = generateMarkdown;
