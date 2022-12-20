//consign can't use multiples arquives using .
module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)

//routas especificas são depois

    app.route('/categories/tree')
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove)

    app.route('/articles')
        .get(app.api.articles.get)
        .post(app.api.articles.save)

    app.route('/articles/:id')
        .get(app.api.articles.getById)
        .put(app.api.articles.save)
        .delete(app.api.articles.remove)
}