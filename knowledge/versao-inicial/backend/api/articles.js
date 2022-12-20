module.exports = app => {
    const { existsOrEror, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const article = { ...req.body }
        if (req.params.id) article.id = req.params.id

        try {
            existsOrEror(article.name, 'Nome não informado')
            existsOrEror(article.description, 'Descrição não informada')
            existsOrEror(article.categoryId, 'Categoria não informada')
            existsOrEror(article.userId, 'Autor não informado')
            existsOrEror(article.content, 'Conteudo não informado')
        } catch (msg) {
            res.status(400).send(msg)
        }

        if (article.id) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send())
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('articles')
                .where({ id: req.params.id }).del()
            notExistsOrError(rowsDeleted, 'Artigo não foi encontrado.')

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10
    //page get in query
    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('articles').count('id').frist()
        const count = parseInt(result.count)

        app.db('articles')
            .select('id', 'name', 'description')
            .limit(limit).offset(page * limit - limit)
            .then(articles => res.json({ data: articles, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('articles')
            .where({ id: req.params.id })
            .frist()
            .then(article => {
                article.content = article.content.toString()
                return res.json(article)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById }
}

