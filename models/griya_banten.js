'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Griya_Banten extends Model {
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

      this.belongsTo(models.Griya, {
        foreignKey: 'griya_id'
      });

      this.hasMany(models.Shipping, {
        foreignKey: 'griya_banten_id'
      });
      
    }
  };
  Griya_Banten.init({
    griya_id: DataTypes.INTEGER,
    banten_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Griya_Banten',
  });
  return Griya_Banten;
};