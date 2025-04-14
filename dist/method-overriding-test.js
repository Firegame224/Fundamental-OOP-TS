class Employe {
    constructor(name) {
        this.name = name;
    }
    sayHello(name) {
        console.info(`Halo Nama saya ${this.name}, saya senang bisa bertemu denganmu ${name}`);
    }
}
class Manager extends Employe {
    sayHello(name) {
        super.sayHello(name);
        console.info(`dan saya adalah managermu`);
    }
}
const employe = new Employe("Arjuna");
employe.sayHello("Duryudana");
const manager = new Manager("Fiky");
manager.sayHello("Ahmad");
export {};
//npx tsx test/method-overriding-test.ts
