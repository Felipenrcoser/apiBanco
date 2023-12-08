var DataTypes = require("sequelize").DataTypes;
var _EMPRESA = require("./EMPRESA");
var _USUARIO = require("./USUARIO");
var _ESTOQUE = require("./ESTOQUE");
var _UNMEDIDA = require("./UNMEDIDA");
var _QUANTIDADEDESEJADA = require("./QUANTIDADEDESEJADA");
var _PRODUTO = require("./PRODUTO");
var _USUARIOPOREMPRESA = require("./USUARIOPOREMPRESA");

function initModels(sequelize) {
  var EMPRESA = _EMPRESA(sequelize, DataTypes);
  var USUARIO = _USUARIO(sequelize, DataTypes);
  var ESTOQUE = _ESTOQUE(sequelize, DataTypes);
  var UNMEDIDA = _UNMEDIDA(sequelize, DataTypes);
  var QUANTIDADEDESEJADA = _QUANTIDADEDESEJADA(sequelize, DataTypes);
  var PRODUTO = _PRODUTO(sequelize, DataTypes);
  var USUARIOPOREMPRESA = _USUARIOPOREMPRESA(sequelize, DataTypes);

  return {
    EMPRESA,
    USUARIO,
    ESTOQUE,
    UNMEDIDA,
    QUANTIDADEDESEJADA,
    PRODUTO,
    USUARIOPOREMPRESA
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
