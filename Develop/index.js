// Global Variables and required packages
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

//Regular Expression for email validation
const emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


//Array of Questions
const questions = [
    //Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project title? (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    //Description
    {
        type: 'editor',
        name: 'description',
        message: 'Please enter a short description of your project. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    //Installation Instructions
    {
        type: 'editor',
        name: 'installation',
        message: 'Please enter the installation instructions. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    //Usage Information
    {
        type: 'editor',
        name: 'usage',
        message: 'Please enter the instructions for how to use the program. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter the instructions for how to use the program!');
                return false;
            }
        }
    },
    //Contribution Guidelines
    {
        type: 'editor',
        name: 'contribute',
        message: 'Please enter your contribution guidelines. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter your contribution guidelines!');
                return false;
            }
        }
    },
    //Tests
    {
        type: 'editor',
        name: 'testing',
        message: 'Please enter your instructions for testing. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter your instructions for testing!');
                return false;
            }
        }
    },
    //License Confirmation
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a License for your project?',
        default: false
    },
    //License Info, only if license confirmation is true
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license',
        choices: ['MIT','GNU GPLv3','Apache License 2.0','ISC'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    //GitHub Username
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username. (Required)',
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    //GitHub Repo
    {
        type: 'input',
        name: 'repoLink',
        message: "Please enter the URL for the project's GitHub repository. (Required)",
        validate: qInput => {
            if (qInput) {
                return true;
            } else {
                console.log("Please enter the URL for the project's GitHub repository!");
                return false;
            }
        }
    },
    //Email Address
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address. (Required)",
        validate: qInput => {
            if (emailRegEx.test(qInput) ) {
                return true;
            } else {
                console.log("Please enter a valid email address!");
                return false;
            }
        }
    }
];

// const testData = {
//     title: "Test Project",
//     description: "This is a short description of the project.",
//     installation: "These are installation instructions",
//     usage: "These are the usage instructions",
//     contribute: "These are the instructions for making contributions.",
//     testing: "These are the instructions for testing.",
//     confirmLicense: true,
//     license: "GNU GPLv3",
//     github: "MosNes",
//     repoLink: "https://github.com/MosNes/readme-generator-app",
//     email: "7hekarl@gmail.com"
// };

//Write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile('./ReadMes/'+fileName+'.md',data, err=> {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Readme Created!'
            })
        });
    });
};

//Initialize app function
function init() {
    inquirer.prompt(questions)
    .then(response => {
        let markdownObj = {
            title: response.title ,
            data: generateMarkdown(response)
        };
        return markdownObj;
    }).then(markdown => {
        return writeToFile(markdown.title,markdown.data);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err)
    });
    
};

// Function call to initialize app
init();
