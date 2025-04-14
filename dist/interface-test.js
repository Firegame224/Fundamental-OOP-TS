class Manusia {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}
const person = new Manusia("Agus");
person.sayHello("Fiky");
console.log(person);
export {};
//npx tsx test/interface-test.ts
