const express = require('express');
const { cnpj, provider, buyer } = require('./models/');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', async (req, res) => {
  console.log('oi')

  const list = await cnpj.findAll();

  return res.status(200).json(list)
})

app.get('/prov', async (req, res) => {
  console.log('prov');

  const prov = await buyer.findAll();

  return res.status(200).json(prov)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

