const express = require("express");

const Pedido = require("../models/pedidos");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const nuevoPedido = new Pedido(req.body);
        await nuevoPedido.save();
        res.status(201).json(nuevoPedido);

    } catch (error){
        res.status(400).json({mensaje: "Error al crear el pedido.", error});
    }
});

router.get("/", async (req, res) =>{
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

router.put('/:id', async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
        res.json({
            mensaje: 'Pedido actualizado correctamente.',
            pedido: pedido
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el pedido.', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const resultado = await Pedido.findByIdAndDelete(req.params.id);
        res.json({
        mensaje: 'Pedido eliminado correctamente',
        pedido: resultado
        });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al eliminar el pedido', error });
    }
});

router.get("/:cliente", async (req, res) => {
  try {
    const pedidos = await Pedido.find({ cliente: req.params.cliente })
                                .populate("cliente", "nombre email");
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;