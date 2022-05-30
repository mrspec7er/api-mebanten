'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banten_Options extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Banten, {
        foreignKey: 'banten_id'
      });

      this.belongsToMany(models.Cart, {
        through: 'Cart_Option', foreignKey: 'options_id'
      });

      this.hasMany(models.Cart_Option, {
        foreignKey: 'options_id'
      })
    }
  };
  Banten_Options.init({
    banten_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Banten_Options',
  });
  return Banten_Options;
};