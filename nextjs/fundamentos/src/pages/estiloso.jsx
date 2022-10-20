import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <div className={styles}>
            <Link href="/">
                Voltar
            </Link>
            <h1>Estilo Usando Módulos</h1>
        </div>
    )
}