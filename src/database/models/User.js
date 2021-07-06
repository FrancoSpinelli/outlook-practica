module.exports = (sequelize, DataTypes) => {
    let alias = 'Mails'
    let cols= {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        affair: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: 'mails',
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);
    
    return User;
}