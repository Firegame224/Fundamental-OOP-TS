class Manusia {
     constructor(public name: string) {
        
     }
}

class Pekerjaan extends Manusia {

}

class Nama extends Pekerjaan {

}

let manusia = new Manusia("Agus")
console.log(manusia)
manusia = new Nama("Fiky")
console.log(manusia)
manusia = new Pekerjaan("Fiky")

console.log(manusia)

//npx tsx test/polymorphism.-test.ts    