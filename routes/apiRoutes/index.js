const express = require('express');
const router = express.Router();

router.use(require('./candidateRountes'));
router.use(require('./partyRoutes'));


module.exports = router;