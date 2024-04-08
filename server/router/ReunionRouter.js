const ReunionRoute = require("express").Router()
const{getAll} = require("../controller/ReunionController")


ReunionRoute.get("/getAll",getAll)
module.exports = ReunionRoute