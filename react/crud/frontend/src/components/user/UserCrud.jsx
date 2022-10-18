import React, { Component } from "react";
import axios from 'axios';
import Main from "../templates/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const intialState = {
    user: { name: '', email: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...intialState }


    clear() {
        this.setState({ user: intialState.user })
    }

    save() {
        const user = this.state.user
        const mathod = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method]
    }

    render() {
        return (
            <Main {...headerprops}>
                Usuário
            </Main>
            )
        }
    }