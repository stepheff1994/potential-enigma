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
    {
        type: "input",
        name: "installation",
        message: "What's needed for installation?" 
    },
    {
        type: "list",
        name: "license",
        message: "What licenses did you use?",
        choices: ["MIT", "ISC", "SIL", "GNU"] 
    }

   

];

// function to write README file
// infoData is the data passing to fs.writeFile that is a object with data that will show up on the page
function writeToFile(fileName, infoData) {
    fs.writeFile(fileName, infoData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// function to initialize program before fs.writetoFile
function init() {
    inquirer.prompt(questions)
    // .promt(questions) result is taking the questions array. 
    .then( function (userAnswers) {
        console.log(userAnswers)
        writeToFile("README.md", generateMarkdown(userAnswers))
    }) 
}

// function call to initialize program
init();
