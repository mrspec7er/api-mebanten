'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart, {
        foreignKey: "address_id"
      });

      this.belongsTo(models.Kecamatan, {
        foreignKey: 'kecamatan_id'
      });

      this.belongsTo(models.District, {
        foreignKey: 'district_id'
      });

      this.belongsTo(models.Province, {
        foreignKey: 'province_id'
      })
    }
  };
  Address.init({
    address: DataTypes.STRING,
    kecamatan_id: DataTypes.INTEGER,
    district_id: DataTypes.INTEGER,
    province_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};