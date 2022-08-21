// TODO: Include packages needed for this application
const inquirer=require('inquirer')
const fs = require('fs');
const generateMarkdown =require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
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
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err){
            return console.log(err);
        }
    console.log("it worked.")    
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile('./dist/README.md', generateMarkdown(userInput));
    })
}

// Function call to initialize app
init();
