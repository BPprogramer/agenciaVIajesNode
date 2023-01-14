import express from 'express';
import {guardarTestimoniales} from '../controllers/guardarTestimonialController.js'
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';

const router = express.Router();

//re.send(mensaje)      res.json({})  res.render() para mostrar una vista
router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);

export default router;
