const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const Allutilisateur = db.utilisateur.FindAll({})
            res.json(Allutilisateur)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}