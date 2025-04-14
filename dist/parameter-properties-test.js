class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person("Fiky", 15);
person.name = "Rasya";
console.log(`Halo nama saya ${person.name} dan saya berumur ${person.age}`);
export {};
//npx tsx test/parameter-properties-test.ts
