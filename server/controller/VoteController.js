const db = require('../database')
module.exports = {
    getAll:async(req, res)=>{
        try {
            const AllVote = db.Vote.findAll({})
            res.json(AllVote)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    getOne:async(req, res)=>{
        try {
            const OneVote = db.Vote.findOne({
                where:{
                    id:req.params.id
                }
            })
            res.json(OneVote)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    create:async(req, res)=>{
        try {
            const newVote = await db.Vote.create(req.body)
            res.json(newVote)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    update:async(req, res)=>{
        try {
            const updatedVote = await db.Vote.update(req.body, {
                where:{
                    id:req.params.id
                }
            })
            res.json(updatedVote)
            
            
        } catch (error) {
            console.log(error)
            
        }
    },
    remove:async(req, res)=>{
        try {
            const deletedVote = await db.Vote.destroy({
                where:{
                    id:req.params.id
                }
            })
            res.json(deletedVote)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }
}