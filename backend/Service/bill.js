const { cnpj, provider, buyer, order } = require('../models/');

const serviceGetBillById = async (id) => {
  const billsList = await cnpj.findByPk(
    id,
    {
    attributes: ['cnpj', 'id'],
    include: [
      {
        model: provider,
        as: 'cedente',
        attributes: ['name', 'tradingName', 'id', 'cnpjId']
      },
      {
        model: buyer,
        as: 'sacado',
        attributes: ['name']
      },
      {
        model: order,
        as: 'pedido',
        attributes: ['orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      }
    ],
  });

  if (!billsList) {
    return null;
  }

  return billsList
}

module.exports = {
  serviceGetBillById
};