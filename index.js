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
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of this engineer?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of this engineer?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of this engineer?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the github username of this engineer?',
            name: 'github',
        },
    ])
    .then((response) => {
        engineerList.push(new Engineer(response.name, response.id, response.email, response.github));
        console.log('Engineer successfully added to the team.');
        promptContinue();
    })
}

function promptIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of this intern?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of this intern?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of this intern?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is the school that this intern attends?',
            name: 'school',
        },
    ])
    .then((response) => {
        internList.push(new Intern(response.name, response.id, response.email, response.school));
        console.log('Intern successfully added to the team.');
        promptContinue();
    })
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