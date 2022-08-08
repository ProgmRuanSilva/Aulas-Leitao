function tratarErroELancar(erro) {
    throw new Error("Deu Merda") // throw: laçar erro, fazer alguma coisa sobre, vc pode simplismente lançar qualquer coisa
}

function imprimirNomeGritado(obj) {
   try { //Try é um tipo de tratamento em que se der erro vc chama outra catch, pra mostra um erro na tela ou algo assim
    console.log(obj.name.toUpperCase() + "!!!")
   } catch (e) { //se der merda ele chama essa mensagem "Deu merda"
    tratarErroELancar(e)
   } finally {
       console.log("Final") // sempre vai ser chamado, dando certo ou não 
   }

}

const obj = {nome: "Roberto"} // se for name da certo!!
imprimirNomeGritado(obj)