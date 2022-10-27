import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Entrada from "../components/Entrada";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import ClienteRepositorio from "../core/CienteRepositorio";
import Cliente from '../core/Cliente';
import ColecaoCliente from "../firebase/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }

  async function clienteExcluir(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            <Botao className="mb-3" onClick={novoCliente}>Novo</Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluir={clienteExcluir}
          />
        </>
        ) : (
        <Formulario 
        cliente={cliente}
        clienteMudou={salvarCliente} 
        cancelado={() => setVisivel('tabela')}/>
        )}
      </Layout>
    </div>
  )
}
//tailwindcss é uma blibioteca css mais ou menos um bootstrap