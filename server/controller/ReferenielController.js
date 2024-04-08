const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllRefereniels = db.Refereniel.FindAll({})
            res.json(AllRefereniels)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}