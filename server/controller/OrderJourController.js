const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllOrderJours = db.OrderJour.FindAll({})
            res.json(AllOrderJours)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}