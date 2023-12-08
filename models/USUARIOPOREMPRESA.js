const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USUARIOPOREMPRESA', {
    idUsuarioRef: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'idUsuario'
      }
    },
    idEmpresaREf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Empresa',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'USUARIOPOREMPRESA',
    timestamps: false
  });
};
