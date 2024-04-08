const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllFiliales = db.Filiale.FindAll({})
            res.json(AllFiliales)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}