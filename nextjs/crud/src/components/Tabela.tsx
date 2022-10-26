import Cliente from '../core/Cliente';

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function rederCab() {
        return (
            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </table>
        )

    }

    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.idade}</td>
                </tr>
            )
        })
    } //só recebe se for verdadeiro

    return (
        <table>
            <thead>
                {rederCab()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}