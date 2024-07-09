import BlocoEntradaSaida from "./bloco_entrada_saida";
import "../styles/blocos.css";

function Blocos( { totalEntradas, totalSaidas }) {
    return (
        <div className="blocos_container">
            <BlocoEntradaSaida nome="Entradas" valor={totalEntradas} nome_botao="Adicionar Entrada" />
            <BlocoEntradaSaida nome="Saídas" valor={totalSaidas} nome_botao="Adicionar Saída" />
        </div>
    );
}

export default Blocos;