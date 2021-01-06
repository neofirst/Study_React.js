const message: string = 'Hello TypeScript';

let count = 0;
count += 1;

const done:boolean = false;

const numbers:number[] = [1,2,3];

const messages:string[] = ['Hello','TypeScript'];
messages.push('add message');

let mightBeUndefined: string | undefined = 'test';
mightBeUndefined = 'string';
mightBeUndefined = undefined;

let nullableNumber: number | null = null;
nullableNumber = 0;
nullableNumber = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'red';
color = 'yellow';
color = 'orange';

// any 어떤 값이든 가능
const sum = (x:number, y:number):number => {
  return x + y;
}
const result = sum(3,4);
console.log(result);

const sumArray = (numbers:number[]):number =>{
  return numbers.reduce((acc,current)=>acc+current,0);
}

const total = sumArray([1,2,3,4,5]);
console.log(total);

interface Shape{
  getArea(): number;
}

class Circle implements Shape{
  // radius:number;
  constructor(private radius:number){
    this.radius = radius;
  }
  getArea(){
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape{
  // width:number;
  // height:number;
  constructor(private width:number, private height:number){
    this.width = width;
    this.height = height;
  }
  getArea(){
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(3,4);
const shapes:Shape[] = [circle,rectangle];

shapes.forEach(shape=>{
  console.log(shape.getArea());
})

//interface
//type alias

// interface Person{
//   name:string;
//   age?:number;
// }

type Person = {
  name:string;
  age?:number;
}

// interface Developer extends Person{
//   skills: string[];
// }

type Developer = Person & {
  skills: string[];
}

const person:Person = {
  name:'typescript',
  age:20,
}

const expert:Developer = {
  name:'dev',
  age:20,
  skills: ['C#','React.js','Node.js']
}

type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color1: Color = 'red';

//Generic
const merge = <T1, T2>(a:T1, b:T2) => {
  return {
    ...a,
    ...b
  }
}

const merged = merge({foo:1}, {bar:2});
console.log(merged.foo);
console.log(merged.bar);

const wrap = <T>(param:T) =>{
  return{
    param
  }
}
const wrapped = wrap('aa');
console.log(wrapped.param);

// interface Items<T>{
//   list:T[]
// }
type Items<T, V> = {
  list:T[];
  value:V
}
const items:Items<string, number> = {
  list:['a','b','c'],
  value:123
}
console.log(items);

class Queue<T>{
  list:T[] =[];
  get length(){
    return this.list.length;
  }
  enqueue(item:T){
    this.list.push(item);
  }
  dequeue(){
    return this.list.shift();
  }
}
const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
while(queue.length > 0){
  console.log(queue.dequeue());
}
