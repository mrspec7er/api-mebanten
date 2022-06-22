'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banten_Option_Upacara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Banten_Upacara, {
        foreignKey: 'banten_id'
      });

      this.belongsToMany(models.Cart_Upacara, {
        through: 'Cart_Option_Upacara', foreignKey: 'options_id'
      });

      this.hasMany(models.Cart_Option_Upacara, {
        foreignKey: 'options_id'
      })
    }
  };
  Banten_Option_Upacara.init({
    banten_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Banten_Option_Upacara',
  });
  return Banten_Option_Upacara;
};