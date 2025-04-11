class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employe extends Person{
    work : string

    constructor (name:string,work:string) {
        super(name);
        this.work = work;
    }
}

const EmployeWork = new Employe("Anto","karyawan")

console.info(`Nama saya ${EmployeWork.name} dan saya bekerja sebagai ${EmployeWork.work}`)


//npx tsx test/super-constructor-test.ts