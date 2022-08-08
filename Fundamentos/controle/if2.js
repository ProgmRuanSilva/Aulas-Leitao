function teste1(num) {
    if(num > 7)
    console.log(num) //apenas essa sentença de codigo está assosiada a estrutura if
    
    console.log("Final") //como essa sentença está fora do if ela sempre vai executar.
} //nesse caso o uso de bloco em javascript é opcional dentro de uma estrutura if

//se vc quiser assosiar varias sentenças de codigo associadas a um bloco vc tem que colocar chaves, se for apenas uma 
// vc tem liberde de decidir
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7)
        ;  //essa seria uma linha de codigo vazia
    
    { //como não á uma condicional ele sempre abrirá o bloco
        console.log(num)
    }
} // moral da historia é: não use ; em uma declaração if

teste2(6)
teste2(8)