import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

import  Multi from './componentes/Multiplos'


// const elemento = <h2>React 2</h2>
// ReactDOM.render(elemento, document.getElementById('root'))
// $('<h1>').html('React 2') <- JQuery
// tem q ter a primeira letra maiuscula o componente, visando diferenciar de tags padrão!!
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome='Ana'/>
        <Multi.BoaNoite nome='Bia'/>
    </div>
    , document.getElementById('root'))

