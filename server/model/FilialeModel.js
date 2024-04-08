module.exports = (connection,DataTypes)=>{
    const Filiale = connection.define('Filiale',{
        
        Denomination:DataTypes.STRING,
        Type:DataTypes.STRING,
        Abreviation:DataTypes.STRING,
        Adresse:DataTypes.STRING,
        DirecteurGeneral:DataTypes.STRING,
        ValeurNominale:DataTypes.NUMBER,
        NombredeSiege:DataTypes.NUMBER,
        IdentifiantUnique:DataTypes.STRING,
        ActivitePreincipale:DataTypes.STRING,
        ActiviteAnnexe:DataTypes.STRING,
        Visavis:DataTypes.STRING,

    })
    return Filiale;
}