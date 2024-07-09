import BotaoBloco from "./botao_bloco";
import "../styles/bloco.css"


function BlocoEntradaSaida({ nome, valor, nome_botao}){
    return(
        <div class="bloco">
            <p>{nome}</p>
            <p>{valor}</p>
            <BotaoBloco nome_botao={nome_botao}/>
        </div>
    )
}
export default BlocoEntradaSaida;