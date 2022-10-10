import React from 'react'
import ReactDOM from 'react-dom'

import Multi, { BoaNoite } from './components/Multiplos'

//ele transpila em jsx 
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Bia"/>
        <BoaNoite nome="Ana"/>
    </div>
    , document.getElementById('root'))
//os componetes criados por vc devem começar com letra maiuscula