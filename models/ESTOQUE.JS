const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTOQUE', {
    idEmpresaREf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EMPRESA',
        key: 'ID'
      }
    },
    idProdutoRef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PRODUTO',
        key: 'IDPRODUTO'
      }
    },
    quantidadeProduto: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ESTOQUE',
    timestamps: false
  });
};
