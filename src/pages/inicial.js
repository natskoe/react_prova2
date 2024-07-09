import { useState } from "react";
import "../styles/inicial.css";
import Blocos from "../components/blocos";

function Inicial(){

    const [saldo, setSaldo] = useState(1000);
    const [receitas, setReceitas] = useState(500);
    const [despesas, setDespesas] = useState(200);

    return (
        <div>
            <h1>Home</h1>
            <div className="saldos">
                <Blocos totalEntradas={receitas} totalSaidas={despesas}/>
                <p className="saldo_atual">Saldo <br>
                </br>R${saldo}</p>
            </div>
        </div>
    );

}

export default Inicial;