module.exports = function(app,path) {
    const ingredient = require(path.resolve(__dirname+'/../db/controller/ingredient.controller.js')); 

    app.get('/api/ingredients', ingredient.findAll);
    app.get('/api/ingredient/show/:id', ingredient.findById);
    app.get('/api/ingredients/:idDish',ingredient.getIngredientsByDish);
}