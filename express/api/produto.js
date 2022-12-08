//app é uma instancia do express

module.exports = (app, texto) => {
    function salvar(req, res) {
        res.send('Produto > Salvar > ' + texto)
    }

    function obter(req, res) {
        res.send('Produto > obter > ' + texto)
    }

    app.post('/produto', salvar)
    app.get('/produto', obter)

    return { salvar, obter }
}