/**
 * Created by Anthony on 18/09/2015.
 */

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

PurchaseSchema = new Schema({
    total: {type: Number, required: true},
    received: {type: Number, required: true},
    given: {type: Number, required: true},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductSchema'}],
    date: {type: Date, default: Date.now}
});