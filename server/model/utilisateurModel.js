module.exports = (connection,DataTypes)=>{
    const Utilisateur = connection.define('Utilisateur',{
        name:DataTypes.STRING,
        matricule:DataTypes.STRING,
        sexe:DataTypes.STRING,
        phone:DataTypes.STRING,
        role:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        personnelTunisair:DataTypes.BOOLEAN,
        representantLegal:DataTypes.BOOLEAN,
        fonction:DataTypes.STRING,
        societe:DataTypes.STRING,
        photo:DataTypes.STRING,
        cin:DataTypes.STRING,


    })
    return Utilisateur
}