class Person {
    constructor(public name:string, public age:number){
    }
}

const person = new Person("Fiky",15)
person.name="Rasya"

console.log(`Halo nama saya ${person.name} dan saya berumur ${person.age}`)

//npx tsx test/parameter-properties-test.ts