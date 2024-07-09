import "../styles/campo_formulario.css"

function CampoForm( {legenda, valor, tipo, onChange } ){
    return(
        <input 
            placeholder={legenda}
            type= {tipo}
            onChange={onChange}
            value={valor}>
        </input>
    )
}
export default CampoForm;