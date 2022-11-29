const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
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

module.exports = model('Universidad', UniversidadSchema);