'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.District, {
        foreignKey: 'district_id'
      });

      this.belongsTo(models.Griya_Banten, {
        foreignKey: 'banten_id'
      });

      this.belongsTo(models.Griya_Banten, {
        foreignKey: 'griya_id'
      });

    }
  };
  Shipping.init({
    district_id: DataTypes.INTEGER,
    banten_id: DataTypes.INTEGER,
    griya_id: DataTypes.INTEGER,
    shipping_cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};