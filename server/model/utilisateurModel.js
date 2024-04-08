module.exports = (connection,DataTypes)=>{
    const Utilisateur = connection.define('Utilisateur',{
        Name:DataTypes.STRING,
        Matricule:DataTypes.STRING,
        Sexe:DataTypes.STRING,
        Phone:DataTypes.STRING,
        Role:DataTypes.STRING,
        Email:DataTypes.STRING,
        Password:DataTypes.STRING,
        PersonnelTunisair:DataTypes.BOOLEAN,
        RepresentantLegal:DataTypes.BOOLEAN,
        Fonction:DataTypes.STRING,
        Societe:DataTypes.STRING,
        Photo:DataTypes.STRING,
        CIN:DataTypes.STRING,


    })
    return Utilisateur
}