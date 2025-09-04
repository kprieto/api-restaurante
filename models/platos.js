const mongoose = require("mongoose");

const PlatoSchema = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type:Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    ingredientes: {
        type: [String],
        default: [],
        required: true
    }
});

module.exports = mongoose.model("Platos", PlatoSchema);