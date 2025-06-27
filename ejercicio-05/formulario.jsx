const {} = React

function Formulario ({handleSubmit, numero1, numero2,setNumero1, setNumero2, operaciones, setOperaciones, mensajeNumero}) {

    return(
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="numero1">Numero 1:</label>
                <input 
                className={mensajeNumero ? "input-error":"" }
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
                className={mensajeNumero ? "input-error":"" }
                type="number"
                name="numero2"
                value={numero2}
                onChange={(e)=>setNumero2(Number(e.target.value))}
                />
                <br />
                <button type="submit" disabled={operaciones==="dividir" && numero2 < 1 }>Calcular</button>
            </form>
        
        </>
    )
}