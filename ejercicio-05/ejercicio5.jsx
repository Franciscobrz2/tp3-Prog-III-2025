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
    console.log("operaciones",operaciones)
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
    }else if(!operaciones){
      setMensajeNumero("Seleccione una operacion")
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
            <Formulario handleSubmit={handleSubmit} numero1={numero1}
              numero2={numero2} setNumero1={setNumero1} setNumero2={setNumero2}
              operaciones={operaciones} setOperaciones={setOperaciones}
              mensajeNumero={mensajeNumero}
            />
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