class karakter {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
}
class RoleKarakter extends karakter {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
}
class FavoritesFood extends RoleKarakter {
    constructor(id, name, role, Food) {
        super(id, name, role);
        this.Food = Food;
    }
}
const roleChar = new RoleKarakter(1, "Elaina", "Mc");
roleChar.age = 17;
console.info(`Karakter ${roleChar.name} yang berumur ${roleChar.age} adalah ${roleChar.role} di serialnya.`);
console.info("|||||||||||||||||||||||||||||||||||");
const FavoritesCharFood = new FavoritesFood(1, "Fiky Alrasya", "NPC", "Nasi Goreng");
FavoritesCharFood.age = 15;
console.info(`Halo nama saya ${FavoritesCharFood.name}, umur saya ${FavoritesCharFood.age}, makanan favorit saya ${FavoritesCharFood.Food} dan saya adalah ${FavoritesCharFood.role} di Dunia ini`);
export {};
//npx tsx test/inheritance-test.ts     
