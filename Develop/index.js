const inquirer = require('inquirer')

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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then( function (answers) {
        console.log(answers)
    }) 
}

// function call to initialize program
init();
