// const xhr = new XMLHttpRequest()

// xhr.addEventListener('abort', function(){
//     alert('request error')
// })

// xhr.addEventListener('error', function(){
//     alert('request error')
// })

// xhr.addEventListener('load', function(){
//     console.log('sudah di load')
// })

// xhr.addEventListener('progress', function(){
//     console.log('download dalam progress')
// })

// xhr.addEventListener('load', function(){
//     // console.log(xhr.responseText)
//     let res = xhr.responseText
//     const json = JSON.parse(res)

//     // console.log(json)
//     console.log(json.body)
// })

// xhr.onerror = () => {
//     throw 'url bermasalah'
// }

// xhr.open('GET','https://jsonplaceholder.typicode.com/posts/4')

// xhr.send()


// upload progress


// const xhr = new XMLHttpRequest()
// const data = {
//     nama: 'nama',
//     email: 'email@gmail.com',
//     password: 'password'
// }
// xhr.open('POST','https://jsonplaceholder.typicode.com/posts/',true)
// xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// xhr.addEventListener('Load', function (){
//     let res = xhr.responseText
//     const json = JSON.parse(res)

//     console.log(json)
// })

// xhr.send(JSON.stringify(data))


// $.ajax({
//             url: 'https://jsonplaceholder.typicode.com/posts/',
//             method: 'POST',
//             data: {
//                 body:'blablabla',
//                 userId: 201,
//                 title:'lalalala'
//             },
//             headers: {
//                 'Autorization':'token'
//             },
//             beforeSend: () => {
//                 console.log('Ini sebelum permintaan ke server')
//             },
//             success: (response) => {
//                 console.log(response)
//             },
//             complete: () => {
//                 console.log('ini ketika permintaan selesai')
//             },
//             error: (err) => {
//                 console.log(err)
//             }
//         })


// $("#in").on("change", function (e) {
//     var file = this.files[0],
//         formData = new FormData(),
//         xhr = new XMLHttpRequest();
    
//     formData.append('files', file);
    
//     xhr.open('POST', '');
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.upload.addEventListener("load", function () {
//         $(".meter").addClass("done");
//     });
//     xhr.upload.addEventListener("progress", function (event) {
//         if (event.lengthComputable) {
//             var complete = (event.loaded / event.total * 100 | 0);
//             $('.meter').css('width', complete + '%');
//         }
//     });
    
//     xhr.send(formData);
//     return false;
// });



// Fetch

// async function cobaFetch(){
//     let body = {
//         body:'blablabla',
//         userId: 201,
//         title:'lalalala'
//     }

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
//         method: "POST",
//         headers: {
//             'Autorization':'token'
//             },
//             body: JSON.stringify(body)
//     })
//     .then(response => console.log(response.json()))
//     .catch(err => console.log(err))
//     return response
// }

// let obj = cobaFetch()
// console.log(obj)


// async function cobaFetch(){
//     let body = {
//         body:'blablabla',
//         userId: 201,
//         title:'lalalala'
//     }

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/', {
//         method: "GET",
//         // headers: {
//         //     'Autorization':'token'
//         //     },
//         //     body: JSON.stringify(body)
//     })
//     // .then(response => console.log(response.json()))
//     .then(response => response.json())
//     .then(json => {
//         // $('#berita').append(`
//         // <h1>${value.title}</h1>
//         // <p>${value.body}</p>
//         // `)
//         console.log(json)
//     })
//     .catch(err => console.log(err))
//     return response
// }
// cobaFetch()

// async function cobaFetch(){
//     let data = await new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts/', {
//             method: "GET"
//         },
//     )})

//     .then(response => response.json())
//     .then(json => {
//         // $('#berita').append(`
//         // <h1>${value.title}</h1>
//         // <p>${value.body}</p>
//         // `)
//         resolve(json)
//     })
//     .catch(err => console.log(err))
//     return data
// }
// cobaFetch().then(value => {
//     var berit =  document.getElementById("berita")
//     const ber = JSON.parse(localStorage.getItem('json'))
//     berit.innerHTML =""
//     ber.forEach(() => {
//         berit.innerHTML += `
//         <h1>${value.title}</h1>
//         <p>${value.body}</p>`
//     });
// })



// prototipe
// Array.prototype.contoh = "ini contoh"

// const orang = function(nama) {
//     this.nama = nama
//     this.salam = function(){
//         console.log(this.nama)
//     }
// }
// let asep = new orang('asep')

// orang.prototype.namaLengkap = "asep dera purnama"
// orang.prototype.gantiNama = function () {
//     this.nama = this.namaLengkap
// }
// asep.gantiNama()
// asep.salam()



// Kelas
class Orang{
    #status
    constructor(nama, hobi, status ="menunggu"){
        this.nama = nama
        this.hobi = hobi
        this.#status = status
        // let status ='menunggu'
    }
    salam(){
        console.log(this.#status)
    }
}

const asep = new Orang('Asep', ['maen layangan', 'maen kelereng','roasting mas kemal'])
console.log(asep.nama)
console.log(asep.hobi)
