const Stuff = require('../models/stuff.model.js')

const getStuff = async (req, res) => {
    try {
        const stuff = await Stuff.find({})
        res.status(200).json(stuff)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneStuff = async (req, res) => {
    const {id} = req.params
    try {
        const stuff = await Stuff.findById(id)
        res.status(200).json(stuff)
    } catch (error) {
        res.status(500).json(error)
    }
}

const createStuff = async (req, res) => {
    const stuff = new Stuff(req.body)
    try {
        await stuff.save()
        res.status(200).json(stuff)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateStuff = async (req, res) => {
    const {id} = req.params
    try {
        const stuff = await Stuff.findByIdAndUpdate(id, req.body)
        res.status(200).json(stuff)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteStuff = async (req, res) => {
    const {id} = req.params
    try {
        await Stuff.findByIdAndDelete(id, req.body)
        res.status(200).json('deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { getStuff, getOneStuff, createStuff, updateStuff, deleteStuff }