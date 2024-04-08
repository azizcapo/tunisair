const PvRoute = require("express").Router()
const{getAll} = require("../controller/PvController")


PvRoute.get("/getAll",getAll)
module.exports = PvRoute