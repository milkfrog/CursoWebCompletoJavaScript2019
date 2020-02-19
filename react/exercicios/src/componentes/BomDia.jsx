import React, {Fragment} from 'react'

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}! Você tem {props.idade} anos!</h1>
//         <h2>Até Breve!</h2>
//     </div>

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}! Você tem {props.idade} anos!</h1>
//         <h2>Até Breve!</h2>
//     </React.Fragment>

// export default props => 
//     <Fragment>
//         <h1>Bom dia {props.nome}! Você tem {props.idade} anos!</h1>
//         <h2>Até Breve!</h2>
//     </Fragment>

export default props => [
    <h1 key='teste1'>Bom dia {props.nome}! Você tem {props.idade} anos!</h1>,
    <h2 key='teste2'>Até Breve!</h2>
]
    