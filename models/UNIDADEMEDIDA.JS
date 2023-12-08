const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UNMEDIDA', {
    unMedida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    siglaUnidade: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    descUnidade: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UNMEDIDA',
    timestamps: false
  });
};
