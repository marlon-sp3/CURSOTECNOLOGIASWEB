const inputTareas = document.getElementById('inputTareas');
const btnTareas = document.getElementById('btn-Addtareas');
const listaTareas = document.getElementById('listaTareas');

let tareas = [];

function addTarea() {
    const tarea = inputTareas.value.trim();
    console.log(tarea)
    if (tarea !== '') {
      tareas.push(tarea);
      inputTareas.value = '';
      const listItem = document.createElement('li');
      listaTareas.textContent = tarea;
      listItem.id = tarea;
      listaTareas.appendChild(listItem);
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
    }
  }
  window.addEventListener('keyup',function(e){
    if (e.key == "Enter"){
    addTarea()
    }
    })
  btnTareas.addEventListener('click', addTarea);