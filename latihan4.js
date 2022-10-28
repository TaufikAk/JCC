// $('generate').click(() => {
//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts/4',
//         method: 'GET',
//         success: (response) => {
//             $('#berita').append(`
//             <h1>$(response.title)<h1>
//             <p>$(response.body)</p>
//             `)
//         }
//     })
// })

// $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts/',
//     method: 'POST',
//     data:{
//         body: 'ini contoh berita',
//         id: 101,
//         title: 'ini judul post',
//         userId:310
//     },
//     success: (response) => {
//         console.log(response)
//     }
// })

// const toJson = [
//     {
//         nama: 'asep dera',
//         hobi: [
//             "maen layangan", "maen kelereng", "maen geometry"
//         ]
//     },
//     {
//         nama: 'kemal maulana',
//         hobi: [
//             "roasting js", "roasting mas rangga", "nge random"
//         ]
//     }
// ]

// ngirim JSON ke localstorage
// const json = JSON.stringify(toJson)
// localStorage.setItem('dataUser',json)

// ngambil JSON dijadiin objek lg
// const toObj = JSON.parse(json)

// console.log(toJson)
// console.log(toJson[0].nama)
// console.log(json)
// console.log(toObj)
// console.log(toObj[1].nama)

// localStorage.setItem('nama','agus')
// const nama = localStorage.getItem('nama')
// const user = JSON.parse(localStorage.getItem('dataUser'))

// user.forEach((value, index) => {
//     console.log(value)
// })
// console.log(nama)

// const obj = {value: 2 }
// const clone = Object.assign({},obj)
// const clone = {...obj}

// const obj =[{
//     nama: 'nah',
//     "alamat lengkap": 'jl soekarno-hatta'
// }]

// const clone = {
//     ...obj,
//     nama: 'asep'
// }

// console.log(obj[0]["alamat lengkap"])

// let arr =[1, 2, 3, 4, 5, 6]

// console.log(arr.reduce((a,b) => a+b))



// let hewan = [{
//     id: 1,
//     nama: 'anjing'
// }, {
//     id: 2,
//     nama: 'kucing'
// }]

// function ubahNama(arr, id, nama){
//     let index = arr.findIndex(v => v.id ===id)
//     arr[index].nama = nama
//     console.log(arr)
// }

// ubahNama(hewan,1,'bancet')



// const orang = [{
//     nama: 'asep dera',
//     alamat: 'Bandung',
//     hobi: ["roasting mas kemal", "maen layangan"]
// }, {
//     nama: 'kemal',
//     alamat: 'Padalarang',
//     hobi: ["roasting mas rangga sama JS", "nge random"]
// }, {
//     nama: 'pascal',
//     alamat:'Padalarang',
//     hobi: ["", ""]
// }]

// function tambahHobi(arr, nama, hobi){
//     let index = arr.findIndex(v => v.nama === nama)
//     arr[index].hobi.push(hobi)
//     console.log(arr)
// }

// tambahHobi(orang, 'asep dera','Maen Kelereng')



// function cariHobi(arr,  hobi){
//     let array = arr.filter(value => {
//         return value.hobi.includes(hobi)
//     })
//     console.log(array)
// }

// cariHobi(orang,'roasting mas kemal')


// function bunuh(arr, nama){
//     let index = arr.findIndex(v => v.nama === nama)
//     arr.splice(index,1)
//     console.log(arr)
// }

// bunuh(orang,'pascal')

// (function(angka1, angka2){
//     console.log(angka1 + angka2)
// })(4,5)

// function namaDepanBelakang(namaDepan){
//     return function (namaBelakang){
//         return `${namaDepan} ${namaBelakang}`
//     }
// }

// var namaDepan = namaBelakang('Asep')


// function pow(angka, pangkat){
//     if(pangkat ===1){
//         return angka
//     } else{
//         return angka * pow(angka, pangkat - 1)
//     }
// }

// console.log(pow(2,3))


// function sqrt(angka){

// }

// console.log(sqrt(144))


// const btn = document.getElementById('generate')
// btn.addEventListener('click', tampilkanAlert)

// function tampilkanAlert(){
//     alert('berhasil')
// }



// Promise
// let promise = false

// const janji = new Promise((resolve, reject) => {
//     if(promise){
//         resolve('Janji ditepati')
//     }else {
//         reject('Janji tidak ditepati')
//     }
// })

// janji
//     .then((res) => console.log(res))
//     .catch(err => console.log(err))



// console.log('atas')
// async function coba(){
//     // let data = await fetch('https://jsonplaceholder.typicode.com/posts/4')
//     // data.json().then(res => console.log(res))
//     // console.log('bawah')
//     let p = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("ini p"), 2000)
//     });

//     let result = p;
//     alert(result);
//     console.log('amun bijil edan maneh js')
// }
// coba()


// async fungsi

// async function coba(status){
//     let p = new Promise((resolve, reject) => {
//         if(status == 200){
//            setTimeout(() => {
//             resolve({
//                 message:'Berhasil',
//                 status: 200
//             })
//            }, 1000)
//         } else {
//             setTimeout(() => {
//                 reject({
//                     message: 'Gagal',
//                     status: 400
//                 })
//             }, 2000)
//         }
//     })

//     try{
//         let result = await p;
//         console.log(`Request ini ${result.message} dengan status ${result.status}`)
//     } catch (err){
//         console.log(`Request ini ${err.message} dengan status ${err.status}`)
//     }
// }

// coba(400)

// setTimeout(() => {
//     console.log('ini dari setTimeout')
// }, 1000)
// setInterval(() => {
//     console.log('ini dari setInterval')
// }, 2000)


// let counter = 0
// let inter = setInterval(() => {
//     counter ++
//     console.log(`ini dari setInterval ${counter}`)
// }, 200)

// $('#generate').click(() => {
//     clearInterval(inter)
// }, 500)


// let counter = 10;
// let inter = setInterval(() => {
//     counter --
//     console.log(counter)
//     var s = document.getElementById("pe")
//     s.innerHTML = counter
//     if(counter == -1){
//         alert('bom mele.....pes')
//         clearInterval(inter)
//     }
// }, 1000)

$('#teks').keyup((e) => {
    if(e.keyCode == 13){
        let counter = parseInt($('#teks').val())
        var s = document.getElementById("pe")
    s.innerHTML = counter
    if(counter == -1){
        alert('bom mele.....pes')
        clearInterval(inter)
    }
    }
}, 1000)

// $('#inputnama').keyup((e) = {
//     if (e.keyCode==13) {
//         let counter = parseInt($('#inputnama').val())
//         let Interval = setInterval(() = {
//             counter--
//             $('#nama').text(counter)
//             if (counter == 0) {
//                 $('#nama').text(0)
//                 clearInterval(Interval)
//                 alert('Berhasil')
//             }
//         }, 1000)    
//     }
// })