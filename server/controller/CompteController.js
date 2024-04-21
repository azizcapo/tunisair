const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllComptes = db.Comptes.findAll({})
            res.json(AllComptes)
        } catch (error) {
            console.log(error)
        }
    },
    getOne : async(req, res)=>{
        try {
            const Compte = await db.Comptes.findByPk(req.params.id)
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    create : async(req, res)=>{
        try {
            const Compte = await db.Comptes.create(req.body)
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    update : async(req, res)=>{
        try {
            const Compte = await db.Comptes.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    },
    remove : async(req, res)=>{
        try {
            const Compte = await db.Comptes.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(Compte)
        } catch (error) {
            console.log(error)
        }
    }
}