import React from "react";

//sempre quando exportar colocar o nome
export const BoaTarde = props => <h1>Boa Tarde {props.nome}</h1>
export const BoaNoite = props => <h1>Boa Noite {props.nome}</h1>

export default { BoaNoite, BoaTarde }
//exportando como default vc pode puchar por fora