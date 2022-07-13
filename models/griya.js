'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Griya extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Banten, {
        foreignKey: 'griya_id'
      });

      this.hasMany(models.Banten_Upacara, {
        foreignKey: 'griya_id'
      });

      this.belongsTo(models.District, {
        foreignKey: 'district_id'
      });
    }
  };
  Griya.init({
    name: DataTypes.STRING,
    district_id: DataTypes.INTEGER,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Griya',
  });
  return Griya;
};