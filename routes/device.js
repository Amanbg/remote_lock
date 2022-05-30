var express = require('express');
var router = express.Router();

const { DeviceController } = require('../src/controller');

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', DeviceController.searchDevice)

module.exports = router;
