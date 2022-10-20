import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout>
            <div className={styles}>
                <Link href="/">Voltar</Link>
                <h1>Estilo Usando Módulos</h1>
            </div>
        </Layout>
    )
}