const express = require('express');

const router = express.Router();

router.get('/',(req, res) => {
    res.send("We are on post");
})
router.post('/applicant',(req, res) => {
    console.log('req', req.body)
})

module.exports = router;