const btn =document.getElementById('btn')
const taskList = document.getElementById('taskL')
const p = document.getElementById('p')
const task =[]
const item = document.getElementById('task').value

const generateTable = () => {
    taskList.innerHTML = ''
    task.forEach((element, index) => {
        taskList.innerHTML += `<tr>
            <td>${index +1}</td>
            <td><input type='checkbox' ${element.selesai == 1 ? 'checked' : ''} onchange="selesai(
                ${element.id})"/></td>
            <td>
            </tr>`
        
    })
}

const selesai = id =>{

}

const show = id => {

}

const edit = () =>{

}

const hapus = id =>{
    task.splice(id,1)
}

const add = taskItem => {
    task.push({
        id: task.length + 1,
        task: taskItem,
        selesai: 0
    })
    generateTable()
    document.getElementById('task').value = ''
}
document.getElementById('pencet').onclick = () =>{
    add(document.getElementById('task').value)
}