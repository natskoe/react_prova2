import { useState, useEffect } from "react";
import "../styles/inicial.css";
import Blocos from "../components/blocos";
import { lista } from "../data";

function Inicial(){

    const [saldo, setSaldo] = useState(1000);
    const [receitas, setReceitas] = useState(500);
    const [despesas, setDespesas] = useState(200);
    const [lancamentos, setlancamentos] = useState([]);

    useEffect(() => {
        const lancamentos =
          JSON.parse(localStorage.getItem("data")) || lista;
        setlancamentos(lancamentos);
      }, []);

      useEffect(() => {
        
        localStorage.setItem("lancamentos", JSON.stringify(lancamentos));
    
       
        const totalReceitas = calcularTotal(lancamentos, 'entrada');
        const totalDespesas = calcularTotal(lancamentos, 'saida');
        const saldo = calcularSaldo(lancamentos);
    
       
        setReceitas(totalReceitas);
        setDespesas(totalDespesas);
        setSaldo(saldo);
    }, [lancamentos]);
    

    const calcularTotal = (lancamentos, tipo) => {
        return lancamentos.reduce((total, lancamento) => total + (lancamento[tipo] || 0), 0);
    };
    

    const calcularSaldo = (lancamentos) => {
        return lancamentos.reduce((total, lancamento) => total + (lancamento.total || 0), 0);
    };
    

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