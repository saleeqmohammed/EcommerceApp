const { MongoClient } = require("mongodb");
stat={
    db:null
}
// Connection URI
const uri = "mongodb://localhost:27017";
const dbname='shopping'
// Create a new MongoClient
const client = new MongoClient(uri);

module.exports.connect=async function (){
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db(dbname).command({ ping: 1 });
    console.log("Connected successfully to server");
    stat.db=client.db(dbname);
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}

module.exports.get=function(){
    return stat.db;
}