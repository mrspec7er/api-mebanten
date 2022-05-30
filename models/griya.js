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
      this.belongsToMany(models.Banten, {
        through: 'Griya_Banten', foreignKey: 'griya_id'
      });

      this.hasMany(models.Griya_Banten, {
        foreignKey: 'griya_id'
      });
    }
  };
  Griya.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Griya',
  });
  return Griya;
};