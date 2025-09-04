const mongoose = require("mongoose");

const ClienteSchema = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    vip: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model("Clientes", ClienteSchema);