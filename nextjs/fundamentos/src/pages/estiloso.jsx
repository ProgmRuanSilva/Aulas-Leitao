import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout>
            <div className={styles}>
                <h1>Estilo Usando Módulos</h1>
            </div>
        </Layout>
    )
}