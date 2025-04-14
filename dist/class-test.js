class Customer {
    constructor() {
        console.info("Created new Customer");
    }
}
class Order {
    constructor() {
        console.info("Created new Order");
    }
}
const customer = new Customer();
const order = new Order();
new Customer;
export {};
//npx tsx test/class-test.ts
