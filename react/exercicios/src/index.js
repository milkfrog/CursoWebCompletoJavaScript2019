import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
// import BomDia from './componentes/BomDia'

// import  Saudacao from './componentes/Saudacao'

import Exemplo from './componentes/pai'


// const elemento = <h2>React 2</h2>
// ReactDOM.render(elemento, document.getElementById('root'))
// $('<h1>').html('React 2') <- JQuery
// tem q ter a primeira letra maiuscula o componente, visando diferenciar de tags padrão!!
ReactDOM.render(
    <React.Fragment>
        <div>
            <Exemplo.Pai nome="Paulo" sobrenome="Silva" />
            {/* Como passo os componentes Filhos aqui? */}
            
        </div>
        <div>
            <Exemplo.Teste teste="dsad" hahahs="dsada" kfsdfkfs={10} dsad={22.22}/>
        </div>
    </React.Fragment>
    , document.getElementById('root')
)

