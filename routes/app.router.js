module.exports = app => {
    
    const empresaController = require("../controllers/empresas.controller");
    const usuarioController = require("../controllers/usuario.controller");
    

    const router = require("express").Router();

    router.get('/empresas', empresaController.consultaEmpresa)
    router.get('/usuarios', usuarioController.consultaUsuario)

    app.use('/api', router)
}