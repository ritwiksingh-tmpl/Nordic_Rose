module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define('Blogs', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        subtitle: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        subheading: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        shordDesc: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(2048),
            allowNull: false
        },
        bannerImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contentImg: {
            type: DataTypes.STRING,
        },
        contentImgDesc: {
            type: DataTypes.STRING(100),
        },
        AuthorId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        tags: {
            type: DataTypes.STRING(20),
            allowNull: false
        }

    }, {
      tableName: 'Blogs',
      freezeTableName: true
    })

//     Blogs.associate = function({Authors}) {
//         this.belongsTo(Authors, {foreignKey: 'AuthorId'})
//  };

    return Blogs;
}