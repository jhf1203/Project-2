module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Book.associate = function (models) {
    Book.hasMany(models.Review, {
      onDelete: 'cascade'
    });
    Book.hasMany(models.Recommendation, {
      onDelete: 'cascade'
    });
  };

  return Book;
};
