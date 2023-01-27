module.exports = (sequelize, DataTypes) => {
    const HomePage = sequelize.define('HomePage', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,  
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bannerImg: {
            type: DataTypes.STRING
        },
        
    }, {
        tableName: 'HomePage',
        freezeTableName: true,
    })
    // HomePage.associate = function(models) {
    //     // associations can be defined here
    // };
    return HomePage;
};