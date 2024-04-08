module.exports = (connection,DataTypes)=>{
    const Reunion = connection.define('Reunion',{
        Name:DataTypes.STRING,
        Data:DataTypes.DATE,
        Heure:DataTypes.TIME,
    })
    return ;
}