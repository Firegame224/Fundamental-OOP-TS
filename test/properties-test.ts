class Anime {
    readonly id : number;
    title: string ; // Default Properties
    episode? :number;
    
    constructor (id: number, title:string) {
        this.id = id,
        this.title= title
    }

    sayHello(title:string) :void {
        console.info(`Hello ${title} ,my name is ${this.title}`)
    }
    sayGoodBye(title:string) : void {
        console.info(`Goodbye ${title} ,${this.title} pergi dulu`)
    }
}

const anime = new Anime(1, "Ayam")
anime.episode = 12
console.info(anime)

const animek = new Anime(1 , "Elaina")
animek.episode = 18
animek.sayHello("Fiky")
animek.sayGoodBye("Fiky")
console.info(animek)

//npx tsx test/properties-test.ts