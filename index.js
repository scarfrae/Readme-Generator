// TODO: Include packages needed for this application
//allows to read inquirer package
const inquirer = require('inquirer');
//allows to read utils package
// const utils = require('utils');
//allows to read files
const fs = require('fs');


// TODO: Create an array of questions for user input
// const questions = 
inquirer
.prompt([
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is a detailed description of your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Table of Contents',
    name: 'contents',
  },
  {
    type: 'input',
    message: 'What are the instilation instructions for your project?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What is your project usage; i.e how do you use your project',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Include any contribution to your project; else input N/A',
    name: 'contributions',
  },
  {
    type: 'input',
    message: 'Include any tests',
    name: 'tests',
  },

//   {
//     type: '',
//     message: 'Include any tests',
//     name: 'tests',
//   },
]);


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
