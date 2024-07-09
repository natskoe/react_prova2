import "../styles/campo_formulario.css"

function CampoForm( {legenda, valor, tipo, on_change } ){
    return(
        <input 
            placeholder={legenda}
            type= {tipo}
            on_change={on_change}
            value={valor}>
        </input>
    )
}
export default CampoForm;