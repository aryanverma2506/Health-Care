import { query } from "express"

let patientUsers

export default class helpingHandDb{
    static async injectDB(conn){
        if(patientUsers) return patientUsers
        try{
            patientUsers=conn.db(process.env.HELPING_HAND_NS).collection("patientsDetails")
            console.log("connected to collection");
        }
        catch(e){
            console.error(e)
        }
    }
    static async getUser(){
        let cursor
        try{
            cursor=await patientUsers.find()
            // console.log(cursor);
        }
        catch{
            console.log("cant get the data");
            return []
        }
        try{
            const usersList=await cursor.toArray()
            return usersList
        }
        catch{
            console.log("cant make it an array");
        }
    }
    
}