module.exports = (sequelize, DataTypes) => {
  const Recommendation = sequelize.define('Recommendation', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Recommendation.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Recommendation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Recommendation.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recommendation;
};
