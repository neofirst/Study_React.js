var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullname = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var functionUser = { firstName: 'Developer', lastName: 'Neo' };
var classUser = new Student('Developer', 'Neo');
//document.body.textContent = greeter(functionUser);
document.body.textContent = greeter(classUser);
