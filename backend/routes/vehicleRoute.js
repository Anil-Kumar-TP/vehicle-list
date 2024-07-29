
import express from 'express'
import { Vehicle } from '../models/vehicleModel.js';
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.description || !req.body.price || !req.body.manufacture || !req.body.model ) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        const newVehicle = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            mannufacture: req.body.manufacture,
            model: req.body.model,
        };
        const vehicle = await Vehicle.create(newVehicle);
        return res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find({});
        return res.status(200).json({ count: vehicles.length, data: vehicles });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})


router.get('/:id', async (req, res) => {

    const { id } = req.params;
    try {
        const vehicle = await Vehicle.findById(id);
        return res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})


router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.description || !req.body.price || !req.body.mannufacture || !req.body.model ) {
            return res.status(400).send({ message: 'send all fields ' });
        }
        const { id } = req.params;
        const result = await Vehicle.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Vehicle not found!' });
        }
        return res.status(200).send({ message: 'Vehicle updated!' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Vehicle.findByIdAndDelete(id);
        if (!result) {
             return res.status(404).json({ message: 'Vehicle not found!' });
        }
            return res.status(200).send({ message: 'Vehicle deleted!' });
    } catch (error) {
         res.status(500).send({ message: error.message });
    }
})


export default router;
