module.exports = (connection,DataTypes)=>{
    const Comptes = connection.define('Comptes',{
        role:DataTypes.STRING
    })
    return Comptes;
}