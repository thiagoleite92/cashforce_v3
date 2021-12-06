const express = require('express');
const cors = require('cors');
const billsRoute = require('./Routes/bills')

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 3001;

app.use('/bills', billsRoute)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

