'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Upacara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      });


      this.belongsTo(models.Banten_Upacara, {
        foreignKey: 'banten_id'
      });

      this.belongsToMany(models.Banten_Option_Upacara, {
        through: 'Cart_Option_Upacara', foreignKey: 'cart_id'
      })

      this.hasMany(models.Cart_Option_Upacara, {
        foreignKey: 'cart_id'
      })
      
    }
  };
  Cart_Upacara.init({
    user_id: DataTypes.STRING,
    transaction_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    banten_id: DataTypes.INTEGER,
    choices_date: DataTypes.DATE,
    total_price: DataTypes.INTEGER,
    fee: DataTypes.INTEGER,
    payment_status_code: DataTypes.INTEGER,
    payment_status: DataTypes.STRING,
    payment_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cart_Upacara',
  });
  return Cart_Upacara;
};