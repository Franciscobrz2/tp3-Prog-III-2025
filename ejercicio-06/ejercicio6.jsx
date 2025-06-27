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

    if(!altura.toString().includes(".")){
      altu = altu / 100;
    }

    const imc = peso / Math.pow(altu, 2)
    setResultado(imc.toFixed(1))
   
  }
 
  const color = (result) =>{
    if(result<18.5) return"yellow"
    if(result<24.9) return"green"
    if(result<29.9) return"orange"
    return "red"
  }
 
  return(
    <>    
      <section className="contenedor">
      <h1 className="titulo">Calculo IMC</h1>
        <fieldset className="formulario">
          <legend>Formulario</legend>
          <Formulario handleSubmit={handleSubmit} mensajeAltura={mensajeAltura} 
          mensajePeso={mensajePeso} setAltura={setAltura} setPeso={setPeso}/>
          {resultado &&
          (<fieldset className="resultado"> <legend>Resultado</legend> 
          <p style={{color:color(resultado)}}>
            IMC: {resultado}
          </p>
          </fieldset>)
          }
        </fieldset>
      </section>

    </>
  )
}