export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Mario ${codigo}`,
        email:`mario${codigo}@gmail.com`
    })
}
//forma correta de se usar a query da pagina.
//a forma de como vc irá compor o seu backend é mais ou menos isso