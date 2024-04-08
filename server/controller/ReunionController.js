const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllReunions = db.Reunion.FindAll({})
            res.json(AllReunions)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}