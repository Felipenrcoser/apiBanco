const { UNMEDIDA } = require('../models/index');

exports.consultaUnidadeMedida = async (req, res, next) => {
  try {
    const unidadesMedida = await UNMEDIDA.findAll({
      raw: true,
      attributes: ['unMedida', 'siglaUnidade', 'descUnidade'],
      order: [['unMedida', 'ASC']]
    });

    return res.status(200).json(unidadesMedida);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
