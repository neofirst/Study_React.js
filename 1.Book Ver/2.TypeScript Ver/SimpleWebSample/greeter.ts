interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullname: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullname = firstName + ' ' + lastName;
  }
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let functionUser = { firstName: 'Developer', lastName: 'Neo' };
let classUser = new Student('Developer', 'Neo');
//document.body.textContent = greeter(functionUser);
document.body.textContent = greeter(classUser);
