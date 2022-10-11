import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './components/Multiplos'

import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

//ele transpila em jsx 
ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="Ruan"/>
        {/* <Multi.BoaTarde nome="Bia"/>
        <BoaNoite nome="Ana"/> */}
        
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))
//os componetes criados por vc devem começar com letra maiuscula
//inputs por padrão do React não pode-se mexer, é nessecario 