var DataTypes = require("sequelize").DataTypes;
var _EMPRESA = require("./EMPRESA");
var _USUARIO = require("./USUARIO");

function initModels(sequelize) {
  var EMPRESA = _EMPRESA(sequelize, DataTypes);
  var USUARIO = _USUARIO(sequelize, DataTypes);

  return {
    EMPRESA,
    USUARIO
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
