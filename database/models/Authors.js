module.exports = (sequelize, DataTypes) => {
    const Authors = sequelize.define('Authors', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,  
        },
        fullName: {
            type: DataTypes.STRING(80),
            allowNull: false,
        }, 
        about: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        profileImg: {
            type: DataTypes.STRING
        },
        linkFb: {
            type: DataTypes.STRING(50),
            unique: true,
        },
        linkTwt: {
            type: DataTypes.STRING(20),
            unique: true,
        },
        linkWa: {
            type: DataTypes.STRING(15),
            unique: true,
        }
    }, {
        tableName: 'Authors',
        freezeTableName: true,
    })
    // Authors.associate = function(models) {
    //     // associations can be defined here
    // };
    return Authors;
};