export default function Cabeçalho(props) {
    console.log(props)
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}
//props são somente para leituras.