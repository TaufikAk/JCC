// function tampilkanAngka(){
//     for(let i = 1; i < 9; i++){
//         console.log(i);
//     }
// }

// tampilkanAngka()

// function tambah(angka1, angka2){
//     return angka1 + angka2
// }

// const hasile = tambah(13, 24)
// console.log(hasile);

// function operasiBilangan(angka1, angka2, operasi = '+'){
//     if(operasi == '+'){
//         return angka1 + angka2
//     } else if(operasi == '-'){
//         return angka1 - angka2
//     } else if(operasi == '/'){
//         return angka1 / angka2
//     } else if(operasi == '*'){
//         return angka1 * angka2
//     } else{
//         return 'Operatornya kang sing baleg'
//     }

//     // if(operasi == '+') return angka1 + angka2
//     // if(operasi == '-') return angka1 - angka2
//     // if(operasi == '*') return angka1 * angka2
//     // if(operasi == '/') return angka1 / angka2

//     // return 'Operatornya kang sing baleg'
// }

// const hasil = operasiBilangan(9,3,'')
// console.log(hasil);

// const tampilkanNama = () => {
//     console.log('nama saya si Asep');
// }

// tampilkanNama()

// const btn = document.getElementById('btn')
// const input = document.getElementById('input')
// const p = document.getElementById('p')


// btn.onclick = function(event){
//     console.log(event)
// }

// input.onkeyup = function(event){
//     if(event.keyCode === 13){
//         console.log(event.target.value)
//     }
// }

// const array = [1, 2, 3, 7, 'naruto', true, 1.2, function(){
//     alert('ini fungsi')
// }, {
//     nama: 'asep dera',
//     get nama(){
//         return this.nama
//     }
// }]

// console.log(array[1])
// manggil array fungsi
// array[7]()

// const harray = [1, 2, 5, 3, 7, 'naruto']
// console.log(harray)

// menghapus array di akhir
// harray.pop()

//menambahkan array di akhir
// harray.push(404)

//menambahkan array di awal
// harray.shift()

//memasukan data di awal array
// harray.unshift(awal)

//mengganti isi array pada indeks ke
// harray[0] = 'terganti'

//mengganti isi array berdasarkan indeks harray.length
// harray[harray.length] = 'ganti'

//menghilangkan array(indeks,jumlah)
// array.splice(1,2)

//mengganti array(indeks,jumlah,menjadi)
// harray.splice(3,2,'apa hayo')

//menghapus array sebelum indeks 3
// const arr = harray.slice(3)

// console.log(harray)

// harray.forEach((value, index) => {
//     console.log(`${value} mempunyai indeks ${index}`)
// })

// const arr2 = array.map((value, index) => {
//     return value > 2
//     // return value + 2
// })

// console.log(arr2)

// console.log(harray.toString)

// const array1 = ['s', 'f', 'a', 'b', 'h']
// console.log(array1)

// function arrayUnik(arr){
//     return arr.filter((value, index, self) =>{
//         return self.indexOf(value) === index
//     })
// }

// const arr = arrayUnik([1, 2, 32, 44, 32, 56, 2, 44])
// console.log(arr)

// const btn = document.getElementById('btn')
// const input = document.getElementById('input')
// const p = document.getElementById('p')

// $('button').click((event) => {
//     $('#h1').css({
//         'font-size': '72px',
//         background: '-webkit-linear-gradient(red, blue)',
//         '-webkit-text-fill-color':'transparent',
//         '-webkit-background-clip': 'text',
//         'background-size': 'cover',
//         'background-position': 'center'
//     }).click(() => {
//         const pro = prompt('ini click dari h1')
//         if(isNaN(pro)){
//             alert('ini bukan number')
//         }else {
//             alert('Ini number')
//         }
//     })
// })

// $('#btn').click((event) => {
//     $('#h1').append('<p id ="p">Ini tag dari p</p>')
// })

// $('#btn2').click(event => {
//     $('#h1 #p').remove()
// })

// const btn =document.getElementById('btn')
// const input = document.getElementById('input')
// const p = document.getElementById('p')

// $('#btn').click((event => {
//     let anakAyam = parseInt(input.value)
//     for(let i=anakAyam; i<0; i--){
//         p.innerHTML += `
//             <p>Tekotek kotek kotek...</p>
//             <p>Anak ayam turun berkotek...</p>
//             <p>Anak ayam turun ${i}</p>
//             <p>Mati satu tinggal ${i <= 1 ? 'Induknya' : i-1}</p>
//             <p>==============================================</p>
//         `
//     }
// }))

// $('generate').click(() => {
//     let anakAyam = parseInt(('#input').val())
//     for(let i=0; i<anakAyam; i++){
//         p.innerHTML += `
//             <p>Tekotek kotek kotek...</p>
//             <p>Anak ayam turun berkotek...</p>
//             <p>Anak ayam turun ${i}</p>
//             <p>Mati satu tinggal ${i <= 1 ? 'Induknya' : i-1}</p>
//             <p>==============================================</p>
//         `
//     }
// })

// const obj = {
//     key: 1,
//     key2: '2',
//     key3: true,
//     key4: 1.2,
//     key5: [1, 1, 1, 11, 1],
//     key6: {
//         nama: 'asep dera',
//         umur: 48
//     },
//     key7: function(angka1, angka2){
//         return angka1 + angka2
//     }
// }

// console.log(obj.key7(3,24))
// console.log(obj.key5[3])
// console.log(obj.key6.nama)

// const objek = {
//     nama: 'molotov',
//     radius: '2 meter',
//     harga: '50.000',
//     ready: false
// }

// const objek2 = {
//     ...objek,
//     nama: 'granade',
//     rekomendasi: false
// }

// function apaaja(...args){
//     // return arguments[0] + arguments[1] +arguments[2]
//     return args[0] + args[1]
// }

// console.log(apaaja(1,2,10))
// console.log(objek2)

// let pre = [{value: 1}]
// let pre2 = [...pre]
// pre2.push({value: 2})
// console.log(pre)
// console.log(pre2)

const arrayMulti = [[1, 2], [3, 2]]
let newArr = []
console.log(newArr)