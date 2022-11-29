const { Schema, model } = require('mongoose');

const EtapaProyectoSchema = Schema({
    nombre: {
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

module.exports = model('EtapaProyecto', EtapaProyectoSchema);