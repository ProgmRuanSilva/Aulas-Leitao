//consign can't use multiples arquives using .
module.exports = app => {

    //Auth: this routes publics
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.save)

    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(app.api.category.get)
        .post(app.api.category.save)

    //rotas especificas são depois

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.route('/article')
        .all(app.config.passport.authenticate())
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route('/article/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(app.api.article.save)
        .delete(app.api.article.remove)

    app.route('/categories/:id/article')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

}