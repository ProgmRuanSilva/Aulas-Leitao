import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente';

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 44, '2'),
    new Cliente('Carlos', 54, '3'),
    new Cliente('Pedro', 34, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluir(cliente: Cliente) {
    console.log(cliente.id)
  }

  return (

    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
        <Botao className="mb-3">Novo</Botao>
        </div>
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluir={clienteExcluir} />
      </Layout>
    </div>
  )
}
//tailwindcss é uma blibioteca css mais ou menos um bootstrap