'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Option_Upacara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Cart_Upacara, {
        foreignKey: 'cart_id'
      });

      this.belongsTo(models.Banten_Option_Upacara, {
        foreignKey: 'options_id'
      })
    }
  };
  Cart_Option_Upacara.init({
    cart_id: DataTypes.INTEGER,
    options_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Option_Upacara',
  });
  return Cart_Option_Upacara;
};