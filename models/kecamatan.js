'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kecamatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Address, {
        foreignKey: 'kecamatan_id'
      });

      this.belongsTo(models.district, {
        foreignKey: 'district_id'
      })
    }
  };
  Kecamatan.init({
    name: DataTypes.STRING,
    district_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kecamatan',
  });
  return Kecamatan;
};