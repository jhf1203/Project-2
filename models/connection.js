module.exports = (sequelize, DataTypes) => {
  const Connection = sequelize.define('Connection', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    followerID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    followeeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Connection.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Connection.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Connection;
};
