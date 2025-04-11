class Orang {}
class Wayang{}

const orang = new Orang();
const wayang = new Wayang();

expect (orang instanceof Orang).toBe(true);
expect (orang instanceof Wayang).toBe(false);



expect (wayang instanceof Wayang).toBe(true);
expect (wayang instanceof Orang).toBe(false);

//npx tsx test/instanceOf-test.ts