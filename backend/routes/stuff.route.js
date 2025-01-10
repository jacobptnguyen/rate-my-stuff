const express = require('express')
const { getStuff, getOneStuff, createStuff, updateStuff, deleteStuff } = require('../controllers/stuff.controller.js')

const router = express.Router()
router.get('/', getStuff)
router.get('/:id', getOneStuff)
router.post('/', createStuff)
router.put('/:id', updateStuff)
router.delete('/:id', deleteStuff)

module.exports = router