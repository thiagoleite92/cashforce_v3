const express = require('express');
const billsRoute = require('./Routes/bills')

const app = express();

app.use(express.json());

const PORT = 3001;

app.use('/bills', billsRoute)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

