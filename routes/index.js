const router = require('express').Router();

const apiRoutes = require('./api');
const HTMLroutes = require('./HTMLroutes.js');

router.use('/', HTMLroutes);
router.use('/api', apiRoutes);

module.exports = router;