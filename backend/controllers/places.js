const router = require('express').Router()
const db = require("../models")

const { Place } = db

router.post('/', async (req, res) => {
    if (!req.body.pic) {
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    const place = await Place.create(req.body)
    res.json(place)
})


router.get('/', async (req, res) => {
    const places = await Place.findAll()
    res.json(places)
})


router.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const place = await Place.findOne({ id: id })
        if (!place) {
            res.status(404).json({ message: `Could not find place with id "${id}"` })
        } else {
            res.json(place)
        }
    }
})


router.delete('/:id', async (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.status(404).json({ message: `Invalid id "${id}"` })
    } else {
        const place = await Place.findOne({ id: id })
        if (!place) {
            res.status(404).json({ message: `Could not find place with id "${id}"` })
        } else {
            await place.destroy()
            res.json(place)
        }
    }
})

module.exports = router