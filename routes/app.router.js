module.exports = app => {
    
    const empresaController = require("../controllers/empresas.controller");
    const usuarioController = require("../controllers/usuario.controller");
    const usuarioporempresaController = require("../controllers/usuarioporempresa.controller");
    const estoqueController = require("../controllers/estoque.controller");
    const produtoController = require("../controllers/produto.controller");
    const quantidadeDesejadaController = require("../controllers/quantidadedesejada");
    const unidadeMedidaController = require("../controllers/unidademedida");

    

    const router = require("express").Router();

    router.get('/empresas', empresaController.consultaEmpresa)
    router.get('/usuarios', usuarioController.consultaUsuario)
    router.get('/usemp', usuarioporempresaController.consultausuarioporempresa)
    router.get('/estoque', estoqueController.consultaEstoque);
    router.get('/produtos', produtoController.consultaProduto);
    router.get('/quantdes', quantidadeDesejadaController.consultaQuantidadeDesejada);
    router.get('/unmedida', unidadeMedidaController.consultaUnidadeMedida);


    app.use('/api', router)
}