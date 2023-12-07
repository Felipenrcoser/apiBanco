const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USUARIO', {
    idUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nomeUsuario: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    senhaUsuario: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'USUARIO',
    timestamps: false
  });
};
