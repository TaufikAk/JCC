class CRUD{
    #container
    #data
    #value
    constructor(container){
        this.#container = container
        this.#data = localStorage.getItem('mobil') ? JSON.parse(localStorage.getItem('mobil')) : []
        this.generateTable()
    }
    generateTable(){
        this.#container.innerHTML = ''
        this.#data.forEach((value, index) => {
            this.#container.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${value}</td>
                <td style="display: flex; justify-content: space-evenly;">
                    <button class = "edit-btn" data-value = '${value}'>Edit</button>
                    <button class= "hapus-btn" data-value = '${value}'>Hapus</button>
                    <input type= "checkbox" class= "select" data-value='${value}' />
                </td>
            </tr>
            `
        })
        document.querySelectorAll('.edit-btn').forEach(element => {
            element.onclick = () => {
                this.edit(element.dataset.value)
            }
        })        
        document.querySelectorAll('.hapus-btn').forEach(element => {
            element.onclick = () => {
                this.hapus(element.dataset.value)
            }
        })
    }
    
    setValue(value){
        this.#value = value
        return this
    }

    add(){
        const isRegistered = this.#data.findIndex((value) => {
            console.log(this.#value)
            return value == this.#value
        })
        if(isRegistered != -1){
            alert('Mobil sudah ada')
            return
        } 
        this.#data.push(this.#value)
        localStorage.setItem('mobil', JSON.stringify(this.#data))
        this.generateTable()

    }

    edit(value) {
        let hasil = prompt(`Edit nama mobil ${value}`, value)
        if(hasil =='') {
            alert('isi nama bos')
            return
        }
        let index = this.#data.findIndex(v => {
            if(v == null){
                v = "null"
                return v == value
            }
            return v = value
        })
        this.#data[index] = hasil
        localStorage.setItem('mobil', JSON.stringify(this.#data))
        this.generateTable()
    }

    hapus(value){
        let hasil = confirm(`Yakin hapus mobil ${value}`)
        let index = this.#data.findIndex(v => {
            if(v == null){
                return v == value
            }
            return v == value
        })
        if(!hasil) return
        this.#data.splice(index,1)
        localStorage.setItem('mobil', JSON.stringify(this.#data))
        this.generateTable()
    }

    hapusYangDipilih(value){
        // let filter = this.#data.filter(val => {
        //     return val.includes(value)
        // })
        // filter.forEach(isi => {
        //     this.#data.splice(index,1)
        //     localStorage.setItem('mobil', JSON.stringify(this.#data))
        //     this.generateTable()
        // })
        let index = this.#data.findIndex(v => {
            if(v == null){
                return v == value
            }
            return v == value
        })
        this.#data.splice(index,1)
        localStorage.setItem('mobil', JSON.stringify(this.#data))
        this.generateTable
    }
}
