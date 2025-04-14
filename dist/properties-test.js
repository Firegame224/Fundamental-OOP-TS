class Anime {
    constructor(id, title) {
        this.id = id,
            this.title = title;
    }
    sayHello(title) {
        console.info(`Hello ${title} ,my name is ${this.title}`);
    }
    sayGoodBye(title) {
        console.info(`Goodbye ${title} ,${this.title} pergi dulu`);
    }
}
const anime = new Anime(1, "Ayam");
anime.episode = 12;
console.info(anime);
const animek = new Anime(1, "Elaina");
animek.episode = 18;
animek.sayHello("Fiky");
animek.sayGoodBye("Fiky");
console.info(animek);
export {};
//npx tsx test/properties-test.ts
