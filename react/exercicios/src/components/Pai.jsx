import React from "react";
import { childrenProps } from "../ultils/ultils";

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenProps(props)}
        </ul>   
    </div>
        {/* {props.children} se for função use this */}
        
        {/* <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props} />
        <Filho {...props} nome="Ana"/> pro nome ser renderizado precisa ficar depois do spread */}