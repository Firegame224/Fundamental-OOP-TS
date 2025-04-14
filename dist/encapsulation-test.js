class Count {
    constructor() {
        this.count = 0;
    }
    diTambah() {
        this.count++;
    }
    hasil() {
        return this.count;
    }
}
class counter extends Count {
    diTambah() {
        this.count++;
    }
    hasil() {
        console.info("Hasilnya adalah " + this.count);
        return this.count;
    }
}
const hitung = new counter();
hitung.diTambah();
hitung.diTambah();
hitung.diTambah();
console.log(hitung.hasil());
class counter2 extends counter {
    diTambah() {
        this.count += 3;
    }
    hasil() {
        console.info("Hasilnya adalah " + this.count);
        return this.count;
    }
}
const hitung2 = new counter2();
hitung2.diTambah();
hitung2.diTambah();
hitung2.diTambah();
console.log(hitung2.hasil());
export {};
//npx tsx test/encapsulation-test.ts
