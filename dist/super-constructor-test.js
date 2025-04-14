class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employe extends Person {
    constructor(name, work) {
        super(name);
        this.work = work;
    }
}
const EmployeWork = new Employe("Anto", "karyawan");
console.info(`Nama saya ${EmployeWork.name} dan saya bekerja sebagai ${EmployeWork.work}`);
export {};
//npx tsx test/super-constructor-test.ts
