/**
 * Created by Anthony on 17/09/2015.
 */
var ProductRepository = require('./product.js');
var PurchaseRepository = require('./purchase.js');

var qs = require('querystring');
module.exports = {
    getProducts : function(request,response,next){
        console.log("get");
        ProductRepository.findAll(function(products){
            console.log(products);
            response.json(products);
        })
    },
    addProduct : function(req,response,next){
        var data='';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end', function() {
            var product = JSON.parse(data);
            ProductRepository.save(product,function(product){
                console.log("Insertion réussi");
                response.json(product);
            },function(err){
                console.log("Insertion failed : "+err);
                response.send(err);
            });
        });

    },
    updateProduct : function(req,response,next){
        var data='';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end', function() {
            console.log(data);
            var product = JSON.parse(data);
            var id=product.id;
            ProductRepository.update(id,product,function(product){
                console.log("Update réussi");
                response.json(product);
            },function(err){
                console.log("Update failed" +err);
                response.send(err);
            });
        });
    },
    deleteProduct : function(req,response,next){
        var id=req.params.id;
        ProductRepository.delete(id,function(err,deleted){
            response.json({
                id      : id,
                success : deleted && !err
            });
        })
    },

    getPurchases : function(request,response,next){
        PurchaseRepository.findAll(function(purchases){
            console.log(purchases);
            response.json(purchases);
        })
    },
    addPurchase : function(req,response,next){
        var data='';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end', function() {
            var purchase = JSON.parse(data);
            PurchaseRepository.save(purchase,function(purchase){
                console.log("Insertion réussi");
                response.json(purchase);
            },function(err){
                console.log("Insertion failed : "+err);
                response.send(err);
            });
        });

    },
    updatePurchase : function(req,response,next){
        var data='';
        req.on('data',function(chunk){
            data += chunk;
        });
        req.on('end', function() {
            console.log(data);
            var purchase = JSON.parse(data);
            var id=purchase.id;
            PurchaseRepository.update(id,purchase,function(purchase){
                console.log("Update réussi");
                response.json(purchase);
            },function(err){
                console.log("Update failed" +err);
                response.send(err);
            });
        });
    },
    deletePurchase : function(req,response,next){
        var id=req.params.id;
        PurchaseRepository.delete(id,function(err,deleted){
            response.json({
                id      : id,
                success : deleted && !err
            });
        })
    }
};

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}