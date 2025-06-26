const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const operacion = document.getElementById("operacion")
const formulario = document.getElementById("formulario")
const deshabilitar = document.querySelector("button")

const Deshabilitar = (numero) =>{
    deshabilitar.disabled = Number(numero) < 1
}

numero2.addEventListener("input", ()=>{
    if(operacion.value === "dividir"){
        Deshabilitar(numero2.value)
    }
})

operacion.addEventListener("change", ()=>{
    
    if(operacion.value === "dividir"){
        Deshabilitar(numero2.value)
    }else{
        deshabilitar.disabled = false
    }
})

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
   
    const mensajeErorr = document.getElementById("mensaje-error")
    mensajeErorr.innerText = ""
    const primerNumero = Number(numero1.value)
    const segundoNumero = Number(numero2.value)
  

    if(!primerNumero || !segundoNumero){
        mensajeErorr.classList.add("error")
        numero1.classList.add("input-error")
        numero2.classList.add("input-error")
        mensajeErorr.innerText = "Los campos no pueden estar vacios" 
        return
    }

    let resultado = ""
    switch (operacion.value) {
        case "suma":
            resultado = `${primerNumero} + ${segundoNumero} = ${primerNumero + segundoNumero}`
            break
        case "resta":
            resultado = `${primerNumero} - ${segundoNumero} = ${primerNumero - segundoNumero}`
            break
        case "multiplicar":
            resultado = `${primerNumero} x ${segundoNumero} = ${primerNumero * segundoNumero}`
            break
        case "dividir":
            resultado = `${primerNumero} / ${segundoNumero} = ${primerNumero / segundoNumero}`
            break

        default:
            alert("seleccione una operacion")
            return
    }

    const mostrarField = document.getElementById("resultado-fieldset")
    const mostrarResultado = document.getElementById("resultado")
    mostrarField.classList.toggle("oculto")
    mostrarResultado.innerText = resultado
    
})