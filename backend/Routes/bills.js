const express = require('express')

const router = express.Router();

const { controllerGetBillById } = require('../Controller/bills');

router.get('/:id', controllerGetBillById)

module.exports = router;
