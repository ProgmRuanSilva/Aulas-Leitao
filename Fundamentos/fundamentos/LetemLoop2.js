const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs [2]()
funcs [8]()
funcs [6]()
//let funciona por causa do escopo de bloco "e como se ele tivesse uma memoria"

