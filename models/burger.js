module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
    // ,
    // created_at: {
    //     type: DataTypes.NOW,
    //     allowNull: false
    // }
  });

  return Burger;
};
