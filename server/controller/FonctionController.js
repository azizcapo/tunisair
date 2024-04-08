const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllFonctions = db.Fonction.FindAll({})
            res.json(AllFonctions)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}