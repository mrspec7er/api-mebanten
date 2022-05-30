'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cart, {
        foreignKey: 'cart_id'
      });

      this.belongsTo(models.Banten_Options, {
        foreignKey: 'options_id'
      })
    }
  };
  Cart_Option.init({
    cart_id: DataTypes.INTEGER,
    options_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Option',
  });
  return Cart_Option;
};