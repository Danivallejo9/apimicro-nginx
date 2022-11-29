const { Router } = require('express');
const router =  Router();
const Proyecto = require('../models/Proyecto');
const Cliente = require('../models/Cliente');
const EtapaProyecto = require('../models/EtapaProyecto');
const TipoProyecto = require('../models/TipoProyecto');
const Universidad = require('../models/Universidad');

const { validarProyecto } = require('../helpers/validar-proyecto');



router.get('/', async function(req, res){
    try {
        console.log('Ambiente: ',process.env.CONTAINER_HOST);
        
        const proyectos = await Proyecto.find().populate([
            {
                path: 'cliente', select: 'nombre email'
            },
            {
                path: 'tipoProyecto', select: 'nombre'
            },
            {
                path: 'universidad', select: 'nombre direccion telefono'
            },
            {
                path: 'etapaProyecto', select: 'nombre'
            }
        
        ]);
        res.send(proyectos);
    } catch(error){
        console.log(error);
        res.status(500).send('Ocurrió un error al consultar proyectos');
    }
});



module.exports = router;