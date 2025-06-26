const palabrasPredefinidas = ["Manzana", "manzana", "banana", "pera", "durazno", "FRUtilla", "mango","frutilla"]

const lista = document.getElementById("lista")
const elementos = palabrasPredefinidas.map((palabra) => `<li> ${palabra} </li>`)
lista.innerHTML = elementos.toString().replaceAll(",","")

const formulario = document.getElementById("formulario")
const input = document.getElementById("filtrar")


formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    const palabrasMinuscula = palabrasPredefinidas.map(pm => pm.toLocaleLowerCase())
    console.log(palabrasMinuscula)
    const palabra = input.value.toLowerCase() 
    const busqueda = palabrasMinuscula.filter(p=> p == palabra) 

    if(!input.value || !busqueda.length ){
        lista.classList.add("error")
        lista.innerHTML = "Error al filtrar palabra"
        return 
    }else{
        lista.classList.toggle("error",false)
        lista.innerHTML = busqueda.toString().replaceAll(","," | ") +" (Cantidad encontrada "+ busqueda.length +")"
    }
    
})