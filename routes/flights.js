const express = require('express');
const router = express.Router();
// import our controller functions
const flightsCtrl = require('../controllers/flights')

// GET /flights/new
router.get('/new', flightsCtrl.new)

// POST /flights/create -- create
router.post('/', flightsCtrl.create)

// POST /flights -- index
router.get('/', flightsCtrl.index)

// POST /flights/:id -- show
// router.get('/:id', flightsCtrl.show)

module.exports = router;
