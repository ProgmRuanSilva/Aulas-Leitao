import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './components/Multiplos'

import Saudacao from './components/Saudacao'
import Pai from './components/Pai'


//ele transpila em jsx 
ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Ruan"/>
        {/* <Multi.BoaTarde nome="Bia"/>
        <BoaNoite nome="Ana"/> */}
        
        <Pai nome="Paulo" sobrenome="Silva"/>
    </div>
    , document.getElementById('root'))
//os componetes criados por vc devem começar com letra maiuscula
//inputs por padrão do React não pode-se mexer, é nessecario 