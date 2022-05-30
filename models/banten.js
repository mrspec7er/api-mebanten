'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Griya, {
        through: 'Griya_Banten', foreignKey: 'banten_id'
      });

      this.hasMany(models.Griya_Banten, {
        foreignKey: 'banten_id'
      });

      this.hasMany(models.Banten_Options, {
        foreignKey: 'banten_id'
      })

      this.hasMany(models.Cart, {
        foreignKey: 'banten_id'
      })
    }
  };
  Banten.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    min_order_day: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Banten',
  });
  return Banten;
};