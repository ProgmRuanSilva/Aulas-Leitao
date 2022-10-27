import Cliente from '../core/Cliente';
import { iconEdit } from './Icons';
import { iconTrash } from './Icons';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluir?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirActions = props.clienteExcluir || props.clienteSelecionado

    function rederCab() {
        return (
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {exibirActions ? <th className='p-4'>Ações</th> : false}
            </tr>
        )

    }

    function renderDados() {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {exibirActions ? renderActions(cliente) : false}
                </tr>
            )
        })
    } //só recebe se for verdadeiro

    function renderActions(cliente: Cliente) {
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                 flex justify-center items-center
                 text-green-600 rounded-full p-2 m-1
                 hover:bg-purple-50
             `}>
                        {iconEdit}
                    </button>
                ) : false}
                {props.clienteExcluir ? (
                    <button onClick={() => props.clienteExcluir?.(cliente)} className={`
                 flex justify-center items-center
                 text-red-600 rounded-full p-2 m-1
                 hover:bg-purple-50
             `}>
                        {iconTrash}
                    </button>
                ) : false}

            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={` 
            text-gray-100
            bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {rederCab()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}