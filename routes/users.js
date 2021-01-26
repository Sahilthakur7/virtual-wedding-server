const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { userObj } = req.body;

  console.log('userObj---', userObj);
});

module.exports = router;
