class Customer {
    constructor () {
        console.info("Created new Customer")
    }
}

class Order {
    constructor () {
        console.info("Created new Order")
    }
}

const customer: Customer = new Customer();
const order = new Order()

new Customer

//npx tsx test/class-test.ts