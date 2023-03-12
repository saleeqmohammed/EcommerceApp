var db=require('../config/connection')
module.exports={
    addProduct:async function (product,callback){     
        await db.get().collection('products').insertOne(product);
        await callback(product._id.toString());
        return product._id.toString();
        }
    }
