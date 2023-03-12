var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
const collections = require('../config/collections')
module.exports={
    doSignup:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            userData.password= await bcrypt.hash(userData.password,10);
            await db.get().collection(collections.USER_COLLECTION).insertOne(userData);
            resolve(userData)
        })

    },
    doLogin:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus = false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
            if(user){
              bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        console.log("Login Success");
                        response.user=user;
                        response.status=true;
                        resolve(response);
                    }else{
                        console.log("login Failed");
                        resolve({status:false});
                    }
              })  
            }else{
                console.log("Login Failed");
                resolve({status:false})
            }
        })
    }
}