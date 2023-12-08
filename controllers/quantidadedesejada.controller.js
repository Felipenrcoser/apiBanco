const { QUANTIDADEDESEJADA } = require('../models/index');

exports.consultaQuantidadeDesejada = async (req, res, next) => {
  try {
    const quantidadesDesejadas = await QUANTIDADEDESEJADA.findAll({
      raw: true,
      attributes: ['idEmpresaRef', 'idProdutoRef', 'quantidadeDesejada'],
      order: [['idEmpresaRef', 'ASC']]
    });

    return res.status(200).json(quantidadesDesejadas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
