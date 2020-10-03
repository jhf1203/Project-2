module.exports = function (sequelize, DataTypes) {
  const Review = sequelize.define('Review', {
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT
    }
  });

  Review.associate = function (models) {
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Review.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Review;
};
