// inheriten/penurunan

// class Calc{
//     _num1
//     _num2
//     constructor(num1,num2){
//         this._num1 = num1
//         this._num2 = num2
//     }
//     bagi(){
//         console.log(this._num1 / this._num2)
//     }
//     kali(){
//         console.log(this._num1 * this._num2)
//     }
//     kurang(){
//         console.log(this._num1 - this._num2)
//     }
//     tambah(){
//         console.log(this._num1 + this._num2)
//     }
// }

// class Pangkat extends Calc{
//     constructor(num1, num2, num3){
//         super(angka1, angka2)
//         this.num3 = num3
//     }
//     pangkat(){
//         console.log(this._num1 ** this._num2)
//     }
//     tampil(){
//         console.log(this.num3)
//     }
// }

// let kalkulator = new Calc(1,4)
// let pangkat = new Pangkat(2,3,53)

// kalkulator.bagi()
// kalkulator.kali()
// kalkulator.kurang()
// kalkulator.tambah()



// Abstrak kelas tidak bisa dipanggil langsung, harus dipanggil oleh anaknya

class Calc{
    constructor(num1,num2){
        if(this.constructor == Calc){
            throw "Nggak bisa dipanggil langsung"
        }
        this._num1 = num1
        this._num2 = num2
    }
    bagi(){
        console.log(this._num1 / this._num2)
    }
    kali(){
        console.log(this._num1 * this._num2)
    }
    kurang(){
        console.log(this._num1 - this._num2)
    }
    tambah(){
        console.log(this._num1 + this._num2)
    }
}

class Pangkat extends Calc{
    constructor(num1, num2, num3){
        super(num1, num2)
        this.num3 = num3
    }
    pangkat(){
        console.log(this._num1 ** this._num2)
    }
    tampil(){
        console.log(this.num3)
    }
}


// let kalkulator = new Calc(1,4) 
let pangkat = new Pangkat(2,3,53)

pangkat.kurang()
// let kalkulator = new Calc(1,4)  //error karena kelas abstrak
// let pangkat = new Pangkat(2,3,53)

// kalkulator.kali()
// pangkat.kali()


// Polimorpism merubah fungsi yang sudah ada di parent saat di anak