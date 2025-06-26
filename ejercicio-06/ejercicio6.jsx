// Escribir un programa con HTML+React con formulario que permita calcular el IMC de una
// persona. Luego de realizar el cálculo, mostrar un mensaje con las siguientes características:
// • Si IMC < 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo.
// • Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un
// nivel normal.
// • Si IMC está entre 25 y 29.9 mostrar un mensaje en tono naranja indicando que se trata de un
// nivel de sobrepeso.
// • Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un
// nivel de obesidad.
const {useState} = React

function App(){
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [resultado, setResultado] = useState(null)
  const [mensajeAltura, setMensajeAltura] = useState("")
  const [mensajePeso, setMensajePeso] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    let valido = true
    console.log(altura)
    if(!altura){
      setMensajeAltura("La altura no puede estar vacia")
      valido= false
    }else if(altura < 0){
      setMensajeAltura("La altura no puede ser negativa")
      valido= false
    }else{
      setMensajeAltura("") 
    }
    if(!peso){
      setMensajePeso("El peso no puede estar vacio")
      valido= false
    }else if(peso < 0){
      setMensajePeso("El peso no puede ser negativo") 
      valido= false
    }else{
      setMensajePeso("")
    }

    if(valido){
      Calculo()
    }
    
  } 

  const Calculo = () => {
    let altu = altura

    if(altura > 3){
      altu = altu / 100;
    }

    const imc = peso / Math.pow(altu, 2)
    setResultado(imc.toFixed(1))
   
  }
 
  
  return(
    <>    
      <section className="contenedor">
      <h1 className="titulo">Calculo IMC</h1>
        <fieldset className="formulario">
          <legend>Formulario</legend>
          <form onSubmit={handleSubmit}>
            <label htmlFor="altura">Altura:</label>
            <input 
            className={mensajeAltura ? "input-error":"" }
            type="number" 
            name="altura"
            value={altura}
            onChange={(e)=> setAltura(Number(e.target.value))}
            />
            {mensajeAltura && <p className="error">{mensajeAltura}</p>}
            <label htmlFor="peso">Peso</label>
            <input 
            className={mensajePeso ? "input-error":"" }
            type="number" 
            name="peso"
            value={peso}
            onChange={(e)=> setPeso(Number(e.target.value))}
            /> 
            {mensajePeso && <p className="error">{mensajePeso}</p>}
            <button>Calcular</button>
          </form>
          {resultado &&
          (<fieldset className="resultado"> <legend>Resultado</legend> 
          <p style=
          {resultado<18.5?
          {color:"yellow"} :
          resultado < 24.9 ?
          {color:"green"}: 
          resultado < 29.9 ? 
          {color:"orange"} : {color:"red"}}>
            IMC: {resultado}
          </p>
          </fieldset>)
          }
        </fieldset>
      </section>

    </>
  )
}