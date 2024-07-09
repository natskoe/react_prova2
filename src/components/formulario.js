import CampoForm from "./campo_formulario";
import { useState } from "react";
import "../styles/formulario.css";

function Formulario(){

    const [descricao, setDescricao] = useState("");
    const [entrada, setEntrada] = useState("");
    const [saida, setSaida] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const entradaConta = {
            codigo: Math.random(),
            descricao,
            entrada: parseFloat(entrada) || 0,
            saida: parseFloat(saida) || 0,
            total: (parseFloat(entrada) - parseFloat(saida))

        };

        const temNaConta = 
            JSON.parse(localStorage.getItem("data")) || [];
        
        const atualizaConta =
            [...temNaConta, entradaConta];

            localStorage.setItem("data", JSON.stringify(atualizaConta));

        setDescricao("");
        setEntrada("");
        setSaida("");
    };
    return(
        <form onSubmit={handleSubmit}>

            <div>
                <CampoForm
                    legenda="Descrição do lançamento"
                    tipo={"text"}
                    valor={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>
            <div>
                <CampoForm
                    legenda="Valor de entrada"
                    tipo={"number"}
                    valor={entrada}
                    onChange={(e) => setEntrada(e.target.value)}
                 />
            </div>
            <div>
                 <CampoForm
                    legenda="Valor de saída"
                    tipo={"number"}
                    valor={saida}
                    onChange={(e) => setSaida(e.target.value)}
                />
            </div>
            <button type="submit">Salvar</button>
        </form>
    )
}
export default Formulario;