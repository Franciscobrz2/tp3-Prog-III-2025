const {useState} = React
function Izquierdo ({izquierdo, onIzquierdo}){
  
  return (
    <>
      <button disabled={izquierdo} onClick={onIzquierdo}
      >Izquierdo</button>
    </>
  )
}

function Derecho ({derecho, onDerecho}){

  return(
    <>
      <button disabled={derecho} onClick={onDerecho}
      >Derecho</button>
    </>
  )
}

function App(){
  const [izquierdo, setIzquierdo] = useState(false)
  const [derecho, setDerecho] = useState(true)

  const onIzquierdo = () =>{
    setDerecho(false)
    setIzquierdo(true)
  }

  const onDerecho = () =>{
    setIzquierdo(false)
    setDerecho(true)
  }

  return(
    <>  
      <section>
        <h1>Ejercicio 4</h1>

        <fieldset>
          <legend>Botones</legend>
          <Izquierdo izquierdo={izquierdo} onIzquierdo={onIzquierdo}/>

          <Derecho derecho={derecho} onDerecho={onDerecho}/>
        </fieldset>
      </section>
    </>
  )
}