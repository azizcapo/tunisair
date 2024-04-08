const {Sequelize,DataTypes} = require("sequelize")

const connection = new Sequelize (
    "pfe",
    "root",
    "root",
    {
        host:'localhost',
        dialect :'mysql'
    }
)

connection.authenticate()
.then(()=>{
    console.log("db connected"); 
})
.catch((err)=>{
    console.log(err);
})

const Utilisateur = require("./model/utilisateurModel")(connection,DataTypes)
const Reunion = require("./model/ReunionModel")(connection,DataTypes)
const Refereniel = require("./model/ReferenielModel")(connection,DataTypes)
const Pv = require("./model/PvModel")(connection,DataTypes)
const OrderJour = require("./model/OrderJourModel")(connection,DataTypes)
const Fonction = require("./model/FonctionModel")(connection,DataTypes)
const Filiale = require("./model/FilialeModel")(connection,DataTypes)
const Comptes = require("./model/Comptes.model")(connection,DataTypes)
const db = {}

connection.sync({alter:true}).then(()=>{
    console.log("table created successfully")
}).catch((error)=>{
    console.log(error)
})


module.exports=db


