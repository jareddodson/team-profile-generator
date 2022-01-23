const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is your managers name? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your managers name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your employees ID number.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your employees email address.'
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your employees office number.'
    },
    {
        type: 'checkbox',
        name: 'menu',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ['Add Engineer', 'Add intern', 'Finish building team'],
        validate: choicesInput => {
            if (choicesInput === 'Add Engineer') {
                return [
                    {
                        type: 'input',
                        name: 'engname',
                        message: 'Please enter your engineers name.'
                    },
                    {
                        type: 'input',
                        name: 'engid',
                        message: 'Please enter your engineers ID.'
                    },
                    {
                        type: 'input',
                        name: 'engemail',
                        message: 'Please enter your engineers E-mail.'
                    },
                    {
                        type: 'input',
                        name: 'enggithub',
                        message: 'Please enter your engineers GitHub username.'
                    }
                ]

            }
        }
    },
    {
        type: 'checkbox',
        name: 'menu',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ['Add Engineer', 'Add intern', 'Finish building team'],
        validate: choicesInput => {
            if (choicesInput === 'Add intern') {
                return [
                    {
                        type: 'input',
                        name: 'internname',
                        message: 'Please enter your interns name.'
                    },
                    {
                        type: 'input',
                        name: 'internid',
                        message: 'Please enter your interns id.'
                    },
                    {
                        type: 'input',
                        name: 'internemail',
                        message: 'Please enter your interns E-mail.'
                    },
                    {
                        type: 'input',
                        name: 'interschool',
                        message: 'Please enter your interns school.'
                    }
                ]
            }
        }
    },
    {
        type: 'checkbox',
        name: 'menu',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ['Add Engineer', 'Add intern', 'Finish building team'],
        validate: choicesInput => {
            if (choicesInput === 'Finish building team') {
                return init();
            }
        }
    }
]

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log('Generating webpage...');
        return generateMarkdown(data);
    })
    .then((template) => {
        writeToFile('index.html', template)
    })
    .catch((err) => {
        console.log(err);
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your webpage file has been successfully created!');
    });
}