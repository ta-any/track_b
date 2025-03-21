const express = require('express');
const router = express.Router()
const fillBD = require('./controller/fill_bd.js');
const getDataInfo = require('./controller/get_data.js')

router.get('/fillBD', fillBD.start);
router.get('/getDataInfo', getDataInfo.infoData);
// getIntervalData
router.get('/getIntervalData', getDataInfo.getIntervalData);


module.exports = router;

