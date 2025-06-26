const mostrar = document.getElementById("mostrar")

const endpoint = "https://jsonplaceholder.typicode.com/todos"
const obtener = async () =>{
    const response = await fetch(`${endpoint}`)

    if(!response.ok){
        mostrar.classList.add("error")
        mostrar.innerText = `Hubo un problema a obtener los datos: ${response.statusText}`
    }

    const data = await response.json()
    
    if( data && data.length > 0){
        const tareasCompletadas = data.filter(t => t.completed)

        const mostrarTotal = document.getElementById("total")
        mostrarTotal.innerHTML = `Son ${tareasCompletadas.length} tareas completadas`


    
        tareasCompletadas.forEach(tarea => {
            const todos = document.createElement("li")
            todos.innerHTML = `<p>ID:${tarea.id} | <b>Tarea:</b> ${tarea.title}</p>
            <p style="color: orange">${tarea.completed}</p>`
            mostrar.append(todos)
            
        })
    }
}

obtener()

