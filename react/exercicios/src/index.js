import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './components/BomDia'

//ele transpila em jsx 
ReactDOM.render(<BomDia nome="Guilherme" idade={10}/>, document.getElementById('root'))
//os componetes criados por vc devem começar com letra maiuscula