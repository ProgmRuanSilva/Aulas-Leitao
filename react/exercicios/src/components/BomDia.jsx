import React, {Fragment} from "react";
//colocando os atributos do index
export default props => 
<React.Fragment>
    <h1>Bom Dia {props.nome}!</h1>
    <h2>Até Breve!</h2>
</React.Fragment>
//props é uma convenção de propiedades
//vc só pode colocar duas tags dentro de uma só
//fragment separa os dois dentro do html puro

//vc pode colocar tambem esses componetes dentro de um array,
//mas colocar as keys dentro do array