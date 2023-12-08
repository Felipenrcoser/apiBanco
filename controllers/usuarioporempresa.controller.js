const {USUARIOPOREMPRESA} = require('../models/index')


exports.consultausuarioporempresa = async (req, res, next) => {
    try {
      const usuarioporempresas = await USUARIOPOREMPRESA.findAll({
        raw: true,
         attributes: ['IDUSUARIOREF', 'IDEMPRESAREF'],
        order: [['IDUSUARIOREF', 'ASC']]
      });
  
      return res.status(200).json(usuarioporempresas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
};