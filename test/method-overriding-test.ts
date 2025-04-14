class Employe {
    name : string

    constructor (name:string) {
        this.name = name
    }
    sayHello(name:string):void {
        console.info(`Halo Nama saya ${this.name}, saya senang bisa bertemu denganmu ${name}`)
    }
}

class Manager extends Employe {
    sayHello(name: string): void {
        super.sayHello(name);
        console.info(`dan saya adalah managermu`)
    }
}

const employe = new Employe("Arjuna")
employe.sayHello("Duryudana")
const manager = new Manager("Fiky");
manager.sayHello("Ahmad")

//npx tsx test/method-overriding-test.ts