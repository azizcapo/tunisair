const PvRoute = require("express").Router()
const{getAll,getOne,remove,update,create} = require("../controller/PvController")


PvRoute.get("/getAll",getAll)
PvRoute.get("/getOne/:id",getOne)

PvRoute.post("/create",create)

PvRoute.put("/update/:id",update)

PvRoute.delete("/remove/:id",remove)


module.exports = PvRoute