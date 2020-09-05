//const Manager = require("./lib/Manager.js");
//const Engineer = require("./lib/Engineer.js");
//const Intern = require("./lib/Intern.js");
//const Employee = require("./lib/Employee.js")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");


const masterArray = [];

function masterInput() {

    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the team member?",
            name: "name"
        },
        {
            type: "list",
            message: "please select team member role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "memberRole"
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
        }
    ]).then(function(answer) {
        const employee = new Employee(answer.name, answer.email, answer.id, answer.role)
        masterArray.push(employee)
        switch (answer.memberRole) {
            case 'Manager':
                managerPrompt();
                break;
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            default:
               const employee = new Employee(answer.name, answer.email, answer.id, answer.role)
               masterArray.push(employee)
               restart();
        }
    });

    function managerPrompt() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNum"
            }
        ]
        ).then(function(answer) {
            console.log(answer.name, answer.email, answer.id, answer.role, answer.officeNum)
            restart();
        })
    };
    
    function engineerPrompt() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What is your github?",
                Name: "gitName"
            }
        ]
        ).then(function(answer) {
            console.log(answer.gitName)
            const engineer = new Engineer(answer.name, answer.email, answer.id, answer.role, answer.gitName)
            masterArray.push(engineer)
            restart();
        })
    }
    
    function internPrompt() {
        inquirer
        .prompt([
            {
                type: "input",
                message: "What school did you go to?",
                Name: "school"
            }
        ]
        ).then(function(answer) {
            console.log(answer.school)
            const intern = new Intern(answer.name, answer.email, answer.id, answer.role, answer.school)
            masterArray.push(intern)
            restart()
        })
    }

    function restart() {
        inquirer
        .prompt([{
            type: 'confirm',
            name: 'addMember',
            message: 'Would you like to add another team member?'
        }])
        .then(function(response) {
            if (response.addMember == true){
                masterInput(masterArray)
            }
            else {
                console.log("derp")
            }
        })
    }

};

masterInput();














        
 
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
