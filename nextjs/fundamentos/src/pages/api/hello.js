// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'Teste Api',
    metodo: req.method,
    nome: req.query.nome,
    idade: req.query.idade
     })
}
//essa é a forma de pegar os paramentros dentro da url
//todas as infos são do tipo string
//não funcionando