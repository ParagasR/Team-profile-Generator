const fs = require('fs')
var text;

//generate the variable that will be passed through the fs.writefile
function generateText(employeeList, length) {

    text = `<!DOCTYPE html>
    
<html lang='en'>
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team List</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>

    <body>
        <header class='hero is-primary'>
            <div class='hero-body is-flex is-justify-content-center'>
                <h1 class='title'>My Team</h1>
            </div>
        </header>

        <main>`
    //calls function that will dynamically generate the cards
    text += generateCards(employeeList, length)

    //closes off the ending of the html code   
    text +=`</main>
    </body>
    
    <footer class='hero is-small is-primary'>
        <div class='hero-body is-flex-direction-column is-align-self-center has-text-centered'>
            <h1 class='subtitle'>Page generated by Team Member Generator</h1>
            <h1 class='subtitle'>Created by Ryan Paragas</h1>
        </div>
    </footer>
</html>`

//write the variable created to the index.html file
fs.writeFile('./dist/index.html', text, (err) => {
    err ? console.error(err) : console.log('Website Generated...')
})
}

//function that will dynamically generate the cards
function generateCards(employee, length) {
    //count is kept so that it will generate the amount of elements in the employee array
    let count = 0;
    let mainReturn = '';
    //1st loop to generate the amount of rows. 4 per row
    for (let i = 0; i < (Math.floor(length/4) + 1); i++) {
        mainReturn += `<div class='section columns is-flex is-justify-content-center my-4'>\n`
        //generate 4 cards per row
        for (let j = 0; j < 4; j++) {
            //if all the employees have accounted for, break out of the loops
            if (count == employee.length) {
                break;
            }
            // html code for the individual employees
            let value = `<div class='box column is-2 mx-6 my-2 p-0'>
    <div class='hero is-small is-link'>
        <div class='hero-body content is-flex-direction-column'>
            <h1 class='title'>${employee[count].getName()}</h1>
            <h2 class='subtitle my-2'>${employee[count].getRole()}</h2>
        </div>
    </div>
    <div class='container is-flex-direction-column m-0 p-0'>
        <div class='section content my-3 py-1 is-flex is-justify-content-center'>
            <h3>id: ${employee[count].getId()}</h3>
        </div>
        <div class='section content my-3 py-1 is-flex is-justify-content-center'>
            <h3><a href='mailto:${employee[count].getEmail()}'>${employee[count].getEmail()}</a></h3>
        </div>
        <div class='section content my-3 py-1 is-flex is-justify-content-center'>
            <h3>`

            //this will generate the unique values per role then append to the template literal 
            if (employee[count].getRole() === 'Manager') {
                value += `Office Number: ${employee[count].getOfficeNumber()}</h3></div></div></div>`
            } else if (employee[count].getRole() === 'Engineer') {
                value += `Github: <a href='https://github.com/${employee[count].getGithub()}'>${employee[count].getGithub()}</a></h3></div></div></div>`
            } else if (employee[count].getRole() === 'Intern') {
                value += `School: ${employee[count].getSchool()}</h3></div></div></div>`
            }
            mainReturn += value;
            count++;
        }
        mainReturn += `</div>\n`
    }
    return mainReturn
}



module.exports = {
    generateText,
}