const FilialeRoute = require("express").Router()
const{getAll} = require("../controller/FilialeController")


FilialeRoute.get("/getAll",getAll)
module.exports = FilialeRoute