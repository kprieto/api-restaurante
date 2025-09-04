const express = require("express");

const Plato = require("../models/platos");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const nuevoPlato = new Plato(req.body);
        await nuevoPlato.save();
        res.status(201).json(nuevoPlato);

    } catch (error){
        res.status(400).json({mensaje: "Error al crear el plato.", error});
    }
});

router.get("/", async (req, res) =>{
    const platos = await Plato.find();
    res.json(platos);
});

router.put('/:id', async (req, res) => {
    try {
        const plato = await Plato.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!plato) {
            return res.status(404).json({ mensaje: 'Plato no encontrado' });
        }
        res.json({
            mensaje: 'Plato actualizado correctamente.',
            plato: plato
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el plato.', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await Plato.findByIdAndDelete(req.params.id);
        res.json({
        mensaje: 'Plato eliminado correctamente',
        plato: resultado
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar el plato', error });
    }
});

module.exports = router;