const { PRODUTO } = require('../models/index');

exports.consultaProduto = async (req, res, next) => {
  try {
    const produtos = await PRODUTO.findAll({
      raw: true,
      attributes: ['idEmpresaRef', 'idProduto', 'descProduto', 'unMedidaRef'],
      order: [['idProduto', 'ASC']]
      // Add other options like order if needed
    });

    return res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
