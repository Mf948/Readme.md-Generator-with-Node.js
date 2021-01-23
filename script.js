const inquirer = require('inquirer')
const { type } = require('os')
const fs  = require('fs')
inquirer.prompt([
 {
    type:"list",
    name: "anything",
    message:'hello',
    choices: ["hey",'yo',"sup"]

 },
{
    type: 'input',
    name: 'ProjectName',
    message: "Project Name",


},
{
    type:'input',
    name: 'Instructions',
    message:'Instructions',
 
},
{
    type:'input',
    name: 'Usageexample',
    message:'Usage example',

},

{
    type:'input',
    name: 'Deployment',
    message:'Add additional notes about how to deploy this on a live system',

},
{
    type:'input',
    name: 'BuiltWith',
    message:'Built With',

},
{
    type:'input',
    name: 'License',
    message:'name all Licenses need it to make this proejetc',

},
{
    type:'input',
    name: 'Acknowledgments',
    message:'give credits',
},
]).then(function(response){
    const data = `
# ${response.ProjectName}

## Getting Started

${response.Instructions}


## Usage example

${response.Usageexample}

 
## Deployment
${response.Deployment}


## Built With
${response.BuiltWith}

## License

${response.License}

## Acknowledgments
${response.Acknowledgments}



`

    fs.writeFile("read.md", data, function(error){
                //True             //False (else)
        error ? console.error(error) : console.log('success')
    })
})
