// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Manager');

class Manager extends Employee {
    constructor(name, email, id, role, officeNum) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.role = role;
        this.email = email;
        this.officeNume = officeNum;
    }

    getOffice() {
        return this.officeNum;
    }
}

module.exports = Manager