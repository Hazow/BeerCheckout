/**
 * Created by Anthony on 18/09/2015.
 */
/**
 * Schema
 */

var schema = new mongoose.Schema({

    name : { type : String, required : true },
    price  : { type : Number, required : true },
    quantity  : { type : Number },
    alcohol : { type : Number , default : 0}

});

/**
 * Model
 */

var ProductModel = mongoose.model('Product',schema);

/**
 * Repository
 */
var repository = {

    findAll : function(successCallback,errorCallback) {

        errorCallback = errorCallback || function(){};

        ProductModel.find(function(err,products){
            err ? errorCallback(err) : successCallback(products);
        });

    },

    save : function(productItem,successCallback,errorCallback) {

        successCallback = successCallback || function(){};
        errorCallback   = errorCallback   || function(){};

        var product = new ProductModel(productItem);

        product.save(function(err,product){
            err ? errorCallback(err) : successCallback(product);
        });

    },

    update : function(id,productItem,successCallback,errorCallback) {

        successCallback = successCallback || function(){};
        errorCallback   = errorCallback   || function(){};

        ProductModel.findByIdAndUpdate(id,productItem,null,function(err,data){
            err ? errorCallback(err) : successCallback(data);
        });
    },

    delete : function(id,callback){

        callback = callback || function(){};

        ProductModel.findByIdAndRemove(id,function(err,nbDeleted){
            callback(err,nbDeleted);
        });
    }

};

/**
 * Export
 */

module.exports = repository;