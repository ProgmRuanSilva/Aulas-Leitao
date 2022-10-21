import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
    //embora o valor esteja sendo gerado o valor ele não atualiza
    const state = useState(0) //array
    
    let numero = state[0]
    let alterarNumero = state[1]
    
    function Incrementar() {
        alterarNumero(numero + 1)    
    }
    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={Incrementar}>Incrementar</button>
        </Layout>
    )
}
//essa é a forma dinamica de se manupular dentro de react
//propiedades são somente
//usando descusturing é mais indicado e, mais limpo.