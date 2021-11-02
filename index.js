const inquirer = require('inquirer');
const generate = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var employeeList = []

promptManager()

// start of the program, starts with manager
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
        //push new object to the main employee array
        employeeList.push(new Manager(response.name, response.id, response.email, response.officeNumber));
        console.log('Manager successfully added to the team.');
        //directs to the continue to start structure tree
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
        //push new object to the main employee array
        employeeList.push(new Engineer(response.name, response.id, response.email, response.github));
        console.log('Engineer successfully added to the team.');
        //continues the structure tree
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
        //push new object to the main employee array
        employeeList.push(new Intern(response.name, response.id, response.email, response.school));
        console.log('Intern successfully added to the team.');
        //continues the structure tree
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
            //if entering another Engineer, will return to the prompts to create another Engineer
            promptEngineer();
        } else if (response.selection === 'Intern') {
            //if entering another Intern, will return to the prompts to create another Intern
            promptIntern();
        } else {
            console.log(`Generating team page...`);
            //call function to get to generating the html page
            generate.generateText(employeeList, employeeList.length);
        }
    })
}