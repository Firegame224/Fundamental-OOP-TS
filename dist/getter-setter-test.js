class Category {
    get name() {
        if (this._name) {
            return this._name;
        }
        else {
            return "Empty";
        }
    }
    set name(value) {
        if (value !== "") {
            this._name = value;
        }
    }
}
const category = new Category();
category.name = "Food";
console.info(category.name);
export {};
//npx tsx test/getter-setter-test.ts
