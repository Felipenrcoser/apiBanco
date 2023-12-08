const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PRODUTO', {
    idEmpresaREf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empresa',
        key: 'id'
      }
    },
    idProduto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descProduto: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    unMedidaRef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UnidadeMedida',
        key: 'unMedida'
      }
    }
  }, {
    sequelize,
    tableName: 'PRODUTO',
    timestamps: false
  });
};
