const {EMPRESA} = require('../models/index')


exports.consultaEmpresa = async (req, res, next) => {
    try {
      const enderecos = await EMPRESA.findAll({
        raw: true,
         attributes: ['ID', 'DESC_EMPRESA'],
        order: [['DESC_EMPRESA', 'ASC']]
      });
  
      return res.status(200).json(enderecos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
};