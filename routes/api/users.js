const express = require('express');
const router = express.Router();

// Send JSON reply
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
