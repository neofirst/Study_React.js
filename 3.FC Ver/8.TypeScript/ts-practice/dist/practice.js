"use strict";
const message = 'Hello TypeScript';
let count = 0;
count += 1;
const done = false;
const numbers = [1, 2, 3];
const messages = ['Hello', 'TypeScript'];
messages.push('add message');
let mightBeUndefined = 'test';
mightBeUndefined = 'string';
mightBeUndefined = undefined;
let nullableNumber = null;
nullableNumber = 0;
nullableNumber = null;
let color = 'red';
color = 'red';
color = 'yellow';
color = 'orange';
// any 어떤 값이든 가능
const sum = (x, y) => {
    return x + y;
};
const result = sum(3, 4);
console.log(result);
const sumArray = (numbers) => {
    return numbers.reduce((acc, current) => acc + current, 0);
};
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
class Circle {
    // radius:number;
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width:number;
    // height:number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(3, 4);
const shapes = [circle, rectangle];
shapes.forEach(shape => {
    console.log(shape.getArea());
});
const person = {
    name: 'typescript',
    age: 20,
};
const expert = {
    name: 'dev',
    age: 20,
    skills: ['C#', 'React.js', 'Node.js']
};
const people = [person, expert];
const color1 = 'red';
//Generic
const merge = (a, b) => {
    return Object.assign(Object.assign({}, a), b);
};
const merged = merge({ foo: 1 }, { bar: 2 });
console.log(merged.foo);
console.log(merged.bar);
const wrap = (param) => {
    return {
        param
    };
};
const wrapped = wrap('aa');
console.log(wrapped.param);
const items = {
    list: ['a', 'b', 'c'],
    value: 123
};
console.log(items);
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
while (queue.length > 0) {
    console.log(queue.dequeue());
}
