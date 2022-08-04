// TODO: Include packages needed for this application
//allows to read inquirer package
const inquirer = require('inquirer');
//allows to read utils package
// const utils = require('utils');
//allows to read files
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//file to generate readme



// TODO: Create an array of questions for user input
const questions = [
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
  {
    type: 'list',
    message: 'Choose a license for your application',
    name: 'license',
    choices: 
    [
      'The Unlicense',
      'Boost Software License 1.0',
      'Apache License 2.0',
      'Mozilla Public License 2.0',
      'GNU AGPLv3',
      'MIT',
      'None'
    ]
  }

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //write to README.md with anything I pass into readMeInfo
  let readMePage = generateMarkdown(data);
  fs.writeFile(fileName, readMePage, (err) =>
  err ? console.error(err) : console.log('Success!')
  );
}
function generateFile(questions){
  inquirer
  .prompt(questions)
  // .then((response) => console.log(response))
  .then((response) => writeToFile('ReadMe', response));
// return readmeData;
}

// TODO: Create a function to initialize app
function init() {
  //put other functions in here
  generateFile(questions);
  //still confused about this section kinda and how to relate everything 
  //maybe need to add inquirer prompt section + then response to here??
}

// Function call to initialize app
init();
