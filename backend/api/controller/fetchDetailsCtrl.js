import helpingHandDb from '../dao/helpingHandDao.js'

export default class usersDetailsCtrl{
    static async getapiPatients(){
        try{
            const userlists=await helpingHandDb.getUser()
            return userlists
        }
        catch{
            console.log("Can't fetch data");
            return []
        }
    }
}