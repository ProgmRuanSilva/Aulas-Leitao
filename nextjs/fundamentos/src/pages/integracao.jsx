export default function Integracao() {
    
    fetch('http://localhost:3000/api/clientes/123')
        .then(resp => resp.json())
        .then(dados => console.log(dados))
    
    return(
        <div>
            <ul>
                <li>Codigo</li>
                <li>Nome</li>
                <li>E-mail</li>
            </ul>
        </div>
    )
}