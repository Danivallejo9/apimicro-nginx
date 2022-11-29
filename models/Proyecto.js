const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        requiered: true,
        unique: true,
    },
    titulo: {
        type: String,
        requiered: true,
    },
    fechaIniciacion: {
        type: Date,
        requiered: true,
    },
    fechaEntrega: {
        type: Date,
        requiered: true,
    },
    valor: {
        type: Number,
        requiered: true,
    },
    fechaCreacion: {
        type: Date,
        requiered: true,
    },
    fechaActualizacion: {
        type: Date,
        requiered: true,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        requiered: false,
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        requiered: true,
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        requiered: true,
    },
    etapaProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'EtapaProyecto',
        requiered: true,
    }
});

module.exports = model('Proyecto', ProyectoSchema ); 