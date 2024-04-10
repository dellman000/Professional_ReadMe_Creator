// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const { type } = require('os');
const renderFullLicense=require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'fileName',
        message: 'What is the fileName of the Project?',
 
    },
    {
        name: 'title',
        message: 'What is the name of the Project?'
    },
    {
        name: 'license',
        type:'list',
        choices:['MIT','Unlicense','GPL v3'],
        message: 'Pick your license for this Project?'
    }
    ,
    {
        name: 'github',
        message: 'what is your github uername?'
    },{
        name: 'email',
        message: 'what is your email address?'
    }
    , {
        name: 'description',
        message: 'What is the description of the project?'
    }
    , {
        name: 'instructions',
        message: 'how does one install the project?',

    }
    , {
        name: 'usage_information',
        message: 'enter path for usage image'
    }
    , {
        name: 'collaborators',
        message: 'enter names of any collaborators sperated by a comma'
    }
    , {
        name: 'third_party',
        message: 'enter any ues of third-party assets sperated by a comma'
    }, {
        name: 'tutorials',
        message: 'enter any tutorials used in this project sperated by a comma'
    }, {
        name: 'testing',
        message: 'enter test instructions'
    }


];

function splitOnCommas(string){
let arr=string.split(',')
let Output='';
arr.forEach(element => {
    Output+=element+'  \n'
});
return Output
}


// TODO: Create a function to write README file
function writeToFile(fileName, dataOBJ) {
    let FullLicense=renderFullLicense(dataOBJ.license)
    let file = 
`# ${dataOBJ.title} 

## Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Credits](#credits)
- [Questions](#questions)


## Description
${dataOBJ.description}
## Installation
${dataOBJ.instructions}
## Usage
![alt text](${dataOBJ.usage_information})
## Tests
${dataOBJ.testing}
## Credits
### Collaborators
${splitOnCommas(dataOBJ.collaborators)}  
### third-party-programs
${splitOnCommas(dataOBJ.third_party)}
### Tutorials
${splitOnCommas(dataOBJ.tutorials)}
## License
${dataOBJ.license}
## Badges
${FullLicense}
## How to Contribute
If you like to contribute, my github username is ${dataOBJ.github}

## Questions
If you have any questions, please contact me at ${dataOBJ.email}  
Link to my github profile page https://github.com/${dataOBJ.github}
 
    `


    fs.writeFile(`./${fileName.split('.')[0]}.md`, file, (err) => {
        if (err) {
            return console.log(err)
        }
    })

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((OBJ) => { writeToFile(OBJ.fileName,OBJ)
    }
        //writeToFile(OBJ.OBJ)}
    
)




}

// Function call to initialize app
init();
