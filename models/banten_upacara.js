'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banten_Upacara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Griya, {
        through: 'Griya', foreignKey: 'griya_id'
      });

      this.hasMany(models.Banten_Option_Upacara, {
        foreignKey: 'banten_id'
      });

      this.hasMany(models.Cart_Upacara, {
        foreignKey: 'banten_id'
      })
    }
  };
  Banten_Upacara.init({
    griya_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    min_order_day: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Banten_Upacara',
  });
  return Banten_Upacara;
};