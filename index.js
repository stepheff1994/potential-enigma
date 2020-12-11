const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')


// array of questions for user
const questions = [ 
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    
    },
    {
        type: "input",
        name: "description",
        message: "Write the description of your project"
       
    },

   

];

// function to write README file
function writeToFile(fileName, potato) {
    fs.writeFile(fileName, potato, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then( function (data) {
        console.log(data)
        const potato = generateMarkdown(data)
        console.log(potato)
        writeToFile("README.md", potato)
    }) 
}

// function call to initialize program
init();
