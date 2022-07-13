'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Address, {
        foreignKey: 'district_id'
      });

      this.hasMany(models.Kecamatan, {
        foreignKey: 'district_id'
      });

      this.hasMany(models.Shipping, {
        foreignKey: 'district_id'
      });

      this.belongsTo(models.Province, {
        foreignKey: 'province_id'
      });

      this.hasOne(models.Griya, {
        foreignKey: 'district_id'
      });
    }
  };
  District.init({
    name: DataTypes.STRING,
    province_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};