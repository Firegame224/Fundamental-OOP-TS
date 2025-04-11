interface HasName {
    name: string
}

interface canSayHello {
    sayHello(name:string):void;
}

class Manusia implements HasName,canSayHello {
    name: string;
    constructor (name:string){
        this.name = name
    }
    sayHello(name: string) {
        console.info(`Hello ${name}, my name is ${this.name}`)
    }
}

const person = new Manusia("Agus")
person.sayHello("Fiky")
console.log(person)
//npx tsx test/interface-test.ts