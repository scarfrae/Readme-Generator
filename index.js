// TODO: Include packages needed for this application
//read inquirer package
const inquirer = require('inquirer');
//read files
const fs = require('fs');
//file to generate readme
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter your full name:',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter a detailed description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter the installation instructions for your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter your project usage; i.e how do you use your project:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Include any contribution to your project; else input N/A:',
    name: 'contributions',
  },
  {
    type: 'input',
    message: 'Include any tests; else input N/A:',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Choose a license for your application:',
    name: 'license',
    choices: 
    [
      'The Unlicense',
      'Boost Software License 1.0',
      'Apache 2.0 License',
      'MIT',
      'None'
    ]
  },
  {
    type: 'input',
    message: 'Input your email:',
    name: 'questions',
  },
  {
    type: 'input',
    message: 'Input your GitHub Username?:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your LinkedIn URL:',
    name: 'linkedin',
  },

];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //write to README.md via pushing data into readMePage variable
  let readMePage = generateMarkdown(data);
  fs.writeFile(fileName, readMePage, (err) =>
  err ? console.error(err) : console.log('Readme generated successfully in dist folder!')
  );
}
function generateFile(questions){
  //ask user inquirer questions 
  inquirer
  .prompt(questions)
  // .then((response) => console.log(response))
  //input responses into readme
  .then((response) => writeToFile('./dist/README.md', response));
}

// TODO: Create a function to initialize app
function init() {
  generateFile(questions);
}

// Function call to initialize app
init();
