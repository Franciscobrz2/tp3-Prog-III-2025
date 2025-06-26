
// Realizar una página web utilizando HTML y React con sólo dos botones llamados “izquierdo” y
// “derecho”. Inicialmente solamente el botón “izquierdo” se encuentra habilitado. Al presionar el
// botón “izquierdo”, se deshabilita a si mismo y luego habilita al botón “derecho”. Luego al presionar
// el botón “derecho”, se deshabilita a si mismo y luego habilita al botón “izquierdo”. Todo esto
// permite que solo un botón este habilitado al mismo tiempo.
const {useState} = React
function App(){
  const [izquierdo, setIzquierdo] = useState(false)
  const [derecho, setDerecho] = useState(true)



  return(
      <>  
        <section>
          <h1>Ejercicio 4</h1>

          <fieldset>
            <legend>Botones</legend>
            <button disabled={izquierdo} onClick={()=>{
              if (!izquierdo){
                setIzquierdo(true)
                setDerecho(false)
              }}}

            >Izquierdo</button>

            <button disabled={derecho} onClick={()=>{
              if(!derecho){
                setIzquierdo(false)
                setDerecho(true)
              }
            }}>Derecho</button>
          </fieldset>
        </section>
      </>
  )
}