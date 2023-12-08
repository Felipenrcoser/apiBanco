const { ESTOQUE } = require('../models/index');

exports.consultaEstoque = async (req, res, next) => {
  try {
    const estoques = await ESTOQUE.findAll({
      raw: true,
      attributes: ['IDEMPRESAREF', 'IDPRODUTOREF', 'QUANTIDADEPRODUTO'],
      order: [['IDEMPRESAREF', 'ASC']]
    });

    return res.status(200).json(estoques);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
