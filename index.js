const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { LVAL_TYPES } = require('@babel/types');

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
        console.log('Manager successfully added to the team.');
        promptContinue();
    })
}

function promptEngineer() {
}

function promptIntern() {
}

function promptContinue() {
    console.log('Select the type of employee: ')
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finish building team'],
            name: 'selection',
        },
    ])
    .then((response) => {
        if(response.selection === 'Engineer') {
            promptEngineer();
        } else if (response.selection === 'Intern') {
            promptIntern();
        } else {
            console.log(`Generating team page...`);
            //call function to get to generating the html page
        }
    })
}