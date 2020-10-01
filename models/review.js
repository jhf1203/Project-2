module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Review;
};
