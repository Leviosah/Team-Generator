//const Manager = require("./lib/Manager.js");
//const Engineer = require("./lib/Engineer.js");
//const Intern = require("./lib/Intern.js");
//const Employee = require("./lib/Employee.jsf")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const masterArray = [];

function masterInput() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "What role does the employee have?",
            name: "employeeRole",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
        
    ]).then(answers => {
        let Manager = '';
        if (answers.employeeRole === 'Manager') {
            inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of the team member?",
                    name: "name"
                },
                {
                    type: "input",
                    message: "What is the team member's ID?",
                    name: "id"
                },
                {
                    type: "input",
                    message: "What is the team member's email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your office number?",
                    name: "officeNum"
                }
            ])
        } else (console.log("derp"))
    })
}

masterInput();