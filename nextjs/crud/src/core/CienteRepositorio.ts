import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}

//vc pode trabalhar com a interface, sem o sitema saber que é firebase