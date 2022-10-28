class Mobil{
    constructor(dataMobils = []){
        this.dataMobils = dataMobils
    }
    show(){
        const listMobil = document.getElementById("list-mobil")
        // const mobil = JSON.parse(localStorage.getItem('dataMobil'))
        listMobil.innerHTML = ""
        for(let i=0; i < this.dataMobils.length; i++){
            var btnEdit = "<a href='#' onclick='mobil.edit("+i+")'> Edit </a>"
            var btnHapus = "<a href='#' onclick='mobil.delete("+i+")'> Hapus </a>"
            listMobil.innerHTML += "<tr><td>" + this.dataMobils[i] + "</td><td>" + btnEdit +" "+ btnHapus +"</td></tr>"
        }
    }
    add(){
        const input = document.querySelector("input[name=mobil]");
        this.dataMobils.push(input.value);
        console.log(input.value);

        const json = JSON.stringify(this.dataMobils)
        localStorage.setItem('dataMobil',json)
        this.show();
    }
    edit(id){
        const newMobil = prompt("Masukan nama mobil", this.dataMobils[id]);
        this.dataMobils[id] = newMobil;
        const json = JSON.stringify(this.dataMobils)
        localStorage.setItem('dataMobil',json)
        this.show();
    }

    delete(id){
         this.dataMobils.splice(id,1);
         const json = JSON.stringify(this.dataMobils)
         localStorage.setItem('dataMobil',json)
         this.show();
    }
}
// ATURAN JS
// null = false
// undefined = false
// array kosong = false
// object kosong = false
// console.log("Tes apakah Object kosong False?", {} == false);
// string kosong = True
// String spasi = true
// console.log("Tes apakah String kosong False?", "" == false);
// console.log("Tes apakah String Spasi False?", " " == false);

// 0 = false

// LOCAL STORAGE
// kalo kosong me return NULL


 // ?? artinya kalo pilihan pertama false maka yang dikasih pilihan 

let dataMobils = JSON.parse(localStorage.getItem('dataMobil'))
dataMobils = dataMobils ?? []
const mobil = new Mobil(dataMobils)
mobil.show()
document.getElementById('submit').addEventListener('click',() => {
    mobil.add()
})