// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const fs = require('fs');
const {generateMarkdown} =require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = ["what is the name of the project?", "Provide a Description of the project",
"are there any special installation instructions", "what are the installation instructions", "what usage can you get out of the project?", "Who and What contributed to the projects?",
"what are the licenses?", "what are the tests of the project?", "How can people reach you if they have questions?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const makeReadMeFile= readMeTemplate =>{
    return new Promise((resolve, reject)=>{
      fs.writeFile('./dist/readme.md', `
      # ${questions[0]}

      # Description
    
      # Table of Contents
    
      # Installation
    
      # Usage
    
      # License
    
      # Contributing
    
      # Tests
    
      # Questions
    
    ` , err =>{
        //if there's an error, reject promise
        if(err){
          reject(err)
          //return out of function, so that code doesn't go to resolve accidentally.
          return;
        }
        
        resolve({
          ok: true,
          message: 'file created'
        })
  
      })
    })
  }

// TODO: Create a function to initialize app
function init() {
    makeReadMeFile();
}

// Function call to initialize app
init();
