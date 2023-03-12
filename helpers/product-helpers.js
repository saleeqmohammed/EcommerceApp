var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={
    addProduct:async function (product,callback){     
        await db.get().collection('products').insertOne(product);
        await callback(product._id.toString());
        return product._id.toString();
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
        })
    }

}
