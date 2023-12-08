const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QUANTIDADEDESEJADA', {
    idEmpresaREf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empresa',
        key: 'id'
      }
    },
    idProdutoRef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Produto',
        key: 'idProduto'
      }
    },
    quantidadeDesejada: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'QUANTIDADEDESEJADA',
    timestamps: false
  });
};
