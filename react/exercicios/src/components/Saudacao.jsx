import React, {Component} from "react";


export default class Saudacao extends Component {

    state = {
        tipo: 'fala',
        nome: 'Alfredo'
    } // com state vc pode alterar os valores que por padrão em props é const 

    constructor(props) {
        super(props)
        
        this.setTipo = this.setTipo.bind(this) //bind pra referenciar o this state
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value }) /* valores não pode ser alterados em props */
    } //setState instancia por padrão

    setNome(e) { 
        this.setState({ nome: e.target.value })
    }

    render() {
        const {tipo, nome } = this.state //não temos o props referenciado
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text"placeholder="Tipo..."
                 value={tipo} onChange={this.setTipo}/> {/*this pq setTipo está em um obj */}
                <input type="text" placeholder="nome"
                 value={nome} onChange={e => this.setNome(e)}/> {/* arrow contextualiza */}
            </div>
        )
    }
}
//react unidirecional: o componete