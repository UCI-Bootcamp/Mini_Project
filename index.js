const fs = require('fs')

const inquirer = require('inquirer')

const prompt = inquirer.createPromptModule()

const myHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`


prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'What is your bio?'
    },
    {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn URL?'
    }
])

    .then(({ name, location, bio, linkedIn }) => {
        console.log(name, location, bio, linkedIn)
        fs.appendFile('index.html', myHTML, () => {
            console.log('hi')
        })

    })



