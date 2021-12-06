const { serviceGetBillById } = require("../Service/bill")

const controllerGetBillById = async (req, res) => {
  const { id } = req.params
  console.log(id)

  const billsById = await serviceGetBillById(id);

  if (!billsById) {
    return res.status(404).send('Não foram encontradas notas fiscais para o ID informado.')
  }

  return res.status(200).json(billsById)
}

module.exports = {
  controllerGetBillById,
};
