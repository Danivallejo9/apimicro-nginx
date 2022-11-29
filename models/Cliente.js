const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        requiered: true,
        unique: true,
    },
    fechaCreacion: {
        type: Date,
        requiered: true,
    },
    fechaActualizacion:{
        type: Date,
        requiered: true,
    } 
});

module.exports = model('Cliente', ClienteSchema);