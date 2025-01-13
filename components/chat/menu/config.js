import MongoClient from  


let client; 

const url='';

const connectToMongodb=()=>{

    try{
       
        client=new MongoClient(url); ///so i have 
        client.connect();
        await client;
    }
      catch(err){
        console.log(err);
      }
}

const getDb=async()=>{
    
    if(!client){
        await client.conect();
    }
    return await clinet.db();
}