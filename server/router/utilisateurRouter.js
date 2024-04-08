const utilisateurRoute = require("express").Router()
const{getAll} = require("../controller/utilisateurController")


utilisateurRoute.get("/getAll",getAll)
module.exports = utilisateurRoute