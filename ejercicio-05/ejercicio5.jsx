// Desarrollar una página web utilizando HTML y React que contenga un formulario para realizar
// operaciones entre dos números ingresados mediante campos <input>. La operación a realizar
// (suma, resta, multiplicación o división) debe seleccionarse mediante un elemento <select>. Al hacer
// clic en el botón "Calcular", se debe ejecutar la operación seleccionada y mostrar el resultado.
// Condición especial: Si el usuario selecciona la operación de división, el botón "Calcular" debe
// deshabilitarse, impidiendo que se realice la operación.

const {useState} = React
function App(){

  const [numero1, setNumero1] = useState("")
  const [numero2, setNumero2] = useState("")
  const [resultado, setResultado] = useState(0)
  const [operaciones, setOperaciones] = useState("")
  const [simbolo, setSimbolo] = useState("")
  const [mensajeNumero, setMensajeNumero] = useState("")

  const Calcular = () => {
    
    let res = 0
    let sim = ""

    switch(operaciones){
      case "sumar":
        res = (numero1) + numero2
        sim = "+"
        break
      case "restar":
        res = numero1 - numero2
        sim = "-"
        break
      case "multiplicar":
        res = numero1 * numero2
        sim = "x"
        break
      case "dividir":
        res = numero1 / numero2
        sim = "/"
        break
      default :
        setMensajeNumero("No selecciono una operacion")
        return
    }

    setResultado(res)
    setSimbolo(sim)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!numero1 && !numero2){
      setMensajeNumero("Los campos no pueden estar vacios, ingrese un numero")
      return
    }else{
      setMensajeNumero("")
      Calcular()
    }
    
  }
  return(
    <>  
      <section className="contenedor">
        <h1>Calcular</h1>

        <fieldset className="formulario">
          <legend>Formulario</legend>
          <form onSubmit={handleSubmit}>

            <label htmlFor="numero1">Numero 1:</label>
            <input 
            type="number"
            name="numero1"
            value={numero1}
            onChange={(e)=>setNumero1(Number(e.target.value))}
            />
            <br /> 
            <select name="operaciones" id="operaciones" value={operaciones} onChange={(e)=>setOperaciones(e.target.value)}>
              <option value="">Operaciones</option>
              <option value="sumar">Sumar</option>
              <option value="restar">Restar</option>
              <option value="multiplicar">Multiplicar</option>
              <option value="dividir">Dividir</option>
            </select>
            <br />
            <label htmlFor="numero2">Numero 1:</label>
            <input 
            type="number"
            name="numero2"
            value={numero2}
            onChange={(e)=>setNumero2(Number(e.target.value))}
            />
            <br />
            <button type="submit" disabled={operaciones==="dividir" && numero2 < 1 }>Calcular</button>
          </form>
          {mensajeNumero && <p className="error">{mensajeNumero}</p>}
          {simbolo && (
            <fieldset className="resultado">
              <div>{numero1} {simbolo} {numero2} = {resultado}</div>
            </fieldset>
          )}
          
        </fieldset>
      </section>
    </>
  )
}