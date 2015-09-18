/**
 * Created by Anthony on 17/09/2015.
 */
module.exports = function(router){

    var controller = require('./controller');

    router.route('/product')
        .get(controller.getProducts)
        .post(controller.addProduct)
        .put(controller.updateProduct);
    router.route('/product/:id')
        .delete(controller.deleteProduct);

    router.route('/purchase')
        .get(controller.getPurchases)
        .post(controller.addPurchase)
        .put(controller.updatePurchase);
    router.route('/purchase/:id')
        .delete(controller.deletePurchase);

}