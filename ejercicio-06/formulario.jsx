const {useState} = React

function Formulario ({handleSubmit, mensajeAltura, mensajePeso, setAltura, setPeso, altura, peso}){
    return(
        <>
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
        </>
    )
}