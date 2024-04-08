const express = require("express")
const app = express()
const PORT = 3010
const cors = require("cors")
const FilialeRoute = require("./router/FilialeRouter")
const PvRoute = require("./router/PvRouter")
const ReunionRoute = require("./router/ReunionRouter")
const utilisateurRoute = require("./router/utilisateurRouter")







require("./database")
app.use(express.static(__dirname+'/..client/dist'))
app.use(cors())
app.use(express.json())

app.use("/api/Filiale", FilialeRoute)
app.use("/api/Pv", PvRoute)
app.use("/api/Reunion", ReunionRoute)
app.use("/api/utilisateur", utilisateurRoute)








app.listen(PORT,()=>{
    console.log("listening on PORT :",PORT);
})