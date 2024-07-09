import "../styles/botao_bloco.css"

function BotaoBloco({ nome_botao }){

    return(
        
        <a className="botao_bloco" href="/">
            {nome_botao}
        </a> 
    )
    
}
export default BotaoBloco;