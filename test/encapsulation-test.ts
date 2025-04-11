class Count {
    protected count:number = 0

    public diTambah(){
        this.count ++
    }
    public hasil(){
        return this.count
    }
}

class counter extends Count {
     diTambah(){
        this.count++
    }
    public hasil(): number {
        console.info("Hasilnya adalah " + this.count)
        return this.count
    }
}

const hitung = new counter()
hitung.diTambah()
hitung.diTambah()
hitung.diTambah()

console.log(hitung.hasil())

class counter2 extends counter {
    diTambah(): void {
        this.count+=3
    }
    public hasil(): number {
        console.info("Hasilnya adalah " + this.count)
        return this.count
    }
}

const hitung2 = new counter2()
hitung2.diTambah()
hitung2.diTambah()
hitung2.diTambah()
console.log(hitung2.hasil())
//npx tsx test/encapsulation-test.ts