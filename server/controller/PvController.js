const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllPvs = db.Pv.FindAll({})
            res.json(AllPvs)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}