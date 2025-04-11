class karakter { // Parent Class
    readonly id:number
    name : string
    age? : number
    constructor(id:number, name:string) {
        this.id = id,
        this.name = name
    }
}

class RoleKarakter extends karakter { //Child Class Mewarisi Class Karakter dan Menambah properti Role, dia Bisa menjadi Parent Class jika ada child Class yg mewarisinya
    role : string
    constructor (id:number, name: string, role:string) {
        super(id,name)
        this.role =role
    }
}

class FavoritesFood extends RoleKarakter{ //Child Class Mewarisi Class Role Karakter dan menambahkan properti Food yg bertipe string
    Food : string
    constructor (id:number, name:string, role:string,Food : string) {
        super(id,name,role)
        this.Food = Food
    }
}
const roleChar = new RoleKarakter(1,"Elaina","Mc")
roleChar.age = 17

console.info(`Karakter ${roleChar.name} yang berumur ${roleChar.age} adalah ${roleChar.role} di serialnya.`)
console.info("|||||||||||||||||||||||||||||||||||")
const FavoritesCharFood = new FavoritesFood(1,"Fiky Alrasya","NPC","Nasi Goreng")
FavoritesCharFood.age = 15
console.info(`Halo nama saya ${FavoritesCharFood.name}, umur saya ${FavoritesCharFood.age}, makanan favorit saya ${FavoritesCharFood.Food} dan saya adalah ${FavoritesCharFood.role} di Dunia ini`)
//npx tsx test/inheritance-test.ts     