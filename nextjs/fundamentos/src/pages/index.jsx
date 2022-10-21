//feito em convenções
//rotas em pages automaticas
//dentro de pages em minusculo
//severside redenring
import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }} >
            <Navegador texto="Estiloso"destino="/estiloso"/>
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
            <Navegador texto="Jsx" destino="/jsx" cor="crimson"/>
            <Navegador texto="Navegação 1" destino="/jsx" cor="green"/>
        </div>
    )
}
//vc pode colocar pastas tambem listadas no projeto atravez do /
