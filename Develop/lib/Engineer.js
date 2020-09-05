// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, gitName) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = role;
        this.email = email;
        this.gitName = gitName; 
    }

    getGithub() {
        return this.gitName;
    }
}

module.exports = Engineer