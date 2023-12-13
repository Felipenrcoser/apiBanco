const {USUARIO} = require('../models/index')


exports.consultaUsuario = async (req, res, next) => {
    try {
      const usuarios = await USUARIO.findAll({
        raw: true,
         attributes: ['IDUSUARIO', 'NOMEUSUARIO','SENHAUSUARIO'],
        order: [['NOMEUSUARIO', 'ASC']]
      });
  
      return res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
};