import { useState } from "react";
import Botao from "../components/Botao";
import Entrada from "../components/Entrada";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente';

export default function Home() {
  
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Carlos', 54, '3'),
    new Cliente('Pedro', 34, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }

  function clienteExcluir(cliente: Cliente) {
    console.log(cliente.id)
  }

  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
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