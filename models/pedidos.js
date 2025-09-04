const mongoose = require("mongoose");

const PedidoSchema = new  mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    platos: {
        type: [String],
        default: [],
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Pedidos", PedidoSchema);