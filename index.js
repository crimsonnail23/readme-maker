// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const fs = require('fs');
const {generateMarkdown} =require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questionsInput = ()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'what is the name of the project',
            validate: projectNameInput=>{
                if(projectNameInput){
                    return true;
                } else {
                    console.log('please enter the project name')
                }
            } 
        },
        {
            type: 'input',
            name: 'description',
            message: 'describe your project'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'what are the installation instructions',
        },
        {
            type:'input',
            name: 'usage',
            message: 'how will the project be used?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'who and/or what contributed to the project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'what are the instructions to test the project?'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses (if any) were used to make this project?',
            choices: ['no license used', 'option 1', 'option 2']
        },
        {
            type: 'input',
            name: 'username',
            message: 'what is yout github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

const makeReadMeFile= readMeTemplate =>{
    return new Promise((resolve, reject)=>{
      fs.writeFile('./dist/readme.md', generateMarkdown , err =>{
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
    questionsInput();
}

// Function call to initialize app
init();
