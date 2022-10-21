export default function handler(req, res) {

    if(req.method === "GET") {
        handGet(req, res)
    }else {
        res.status(405).send()
    }
}

    function handGet(req, res) {
        res.status(200).json({
            id: 1,
            nome: 'Ruan',
            idade: 33
        })
}
//send necessario pois se não completa e execução
//o mesmo se aplica do uso dos componentes