const fs = require('fs')
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()

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