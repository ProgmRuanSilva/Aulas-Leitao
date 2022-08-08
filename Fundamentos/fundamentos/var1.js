{
    {
        {
            {
                var sera = "Será???"
            }
        }
    }
}
console.log(sera)
//o conceito de escopo: em outra linguagens uma varivel fica visivel apenas no bloco
// não em javascript uma variavel é visivel dentro de todo codigo

function teste() {
    var local = 123
}

teste()
console.log(local)
//é importante ter cuidado ao criar variaveis globais por que a partir do momento em que vc muda ela ocorre um erro
//var ou é global ou se cria e m um escopo de função pois só é visivel dentro do escopo