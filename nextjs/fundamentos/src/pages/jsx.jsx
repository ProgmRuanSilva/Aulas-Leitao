import Layout from '../components/Layout'

export default function jsx() {
    //para renderizar js puro dentro de um jsx necessario {}
    const a = 4
    const b = 3
    console.log(a * b)
    return (
        <Layout titulo="Ententdendo Jsx">
            <h1>Jsx é um conceito central</h1>
            {a * b}
        </Layout>
    )
}