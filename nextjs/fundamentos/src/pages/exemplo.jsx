import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'

export default function Exemplo() {
    return(
        <Layout titulo="Exemplo de Css modularizado">
            <Cabecalho titulo="Ruan é demais"/>
            <Cabecalho titulo="Ruan é incrivel"/>
        </Layout>
    )
}
// se quiser colocar dois modulos envolva com div
//todos os paramentros passados aqui podem ser usados no componente que estamos mexendo