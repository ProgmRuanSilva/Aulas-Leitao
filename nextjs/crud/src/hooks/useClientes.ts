import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebase/db/ColecaoCliente"
import ClienteRepositorio from "../core/CienteRepositorio"
import { useEffect, useState } from "react"
import useTableForm from "./useTableForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { formularioVisivel, tabelaVisivel, exibirFormulario, exibirTabela } = useTableForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            exibirTabela()
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirFormulario()
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    function novoCliente(cliente: Cliente) {
        setCliente(Cliente.vazio())
        exibirFormulario()
    }

    return {
        cliente,
        clientes,
        obterTodos,
        novoCliente,
        tabelaVisivel,
        salvarCliente,
        excluirCliente,
        formularioVisivel,
        selecionarCliente,
        exibirTabela
    }

}