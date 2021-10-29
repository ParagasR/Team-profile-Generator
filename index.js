const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var manager;
var engineerList = [];
var internList = [];

promptManager()

function promptManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of this manager?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of this manager?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of this manager?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the office number of this manager?',
            name: 'officeNumber',
        },
    ])
    .then((response) => {
        manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        promptContinue();
    })
}

function promptEngineer() {
    
}

function promptIntern() {
    
}

function promptContinue() {

}