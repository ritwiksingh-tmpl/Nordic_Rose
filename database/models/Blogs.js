module.exports = (sequelize, DataTypes) => {
    const Blogs = sequelize.define('Blogs', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subheading: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shortDesc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
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
            type: DataTypes.STRING,
        },
        Author: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        tags: {
            type: DataTypes.STRING,
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