//forma de trabalhar com comunicação entre modulos

function salvar(req, res) {
    res.send('Usuario > Salvar')
}

function obter(req, res) {
    res.send('Uduario > obter')
}

//forma de exportar
module.exports = {salvar, obter}