import Layout from '../components/Layout'

export function getStaticProps() {
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return(
        <Layout titulo="Conteudo Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}

//ocorre um erro com o server pq foi executado tanto do lado do cliente quanto do servidor.
//depois do getStaticProps ele corrige apenas no ambiente dev, mas não depois da build
