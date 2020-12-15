// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Installation
${data.installation}
  
\`\`\`bash 
npm install
\`\`\`   

## Usage
${data.usage}


## Credits
${data.credits}

## License 
${data.license}

## Features 
${data.features}

## Contributing 
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## Links
[Link to github](https://github.com/${data.links})





`;

}

module.exports = generateMarkdown;
