const moduloA = require('../../moduloa')
console.log(moduloA.bemVindo)
//esse sistema tem problema com linux que a maioria que os servidores usam
//sempre coloque sempre o caminho exatamente 

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Testando')
    res.end()
}).listen(8080)

//index é ultilizado para ver o exports dos projetos