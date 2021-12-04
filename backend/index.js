const express = require('express');
const { cnpj, provider, orderportion, buyer, sponsor, offer, user, order } = require('./models/');

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/', async (req, res) => {
  console.log('oi')

  const list = await cnpj.findAll({
    where: { id: 1},
    attributes: ['cnpj', 'id'],
    include: [
      {
        model: provider,
        as: 'cedente',
        attributes: ['name', 'cnpjId']
      },
      {
        model: buyer,
        as: 'sacado',
        attributes: ['name', 'cnpjId']
      },
      {
        model: order,
        as: 'pedido',
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        }
      }
    ],

  });

  return res.status(200).json(list)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

