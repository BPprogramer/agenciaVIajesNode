import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimoniales = async (req, res)=>{

    //validar formulario
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim()===''){
        errores.push({alerta: 'El nombre esta vacio'})
    }
    if(correo.trim()===''){
        errores.push({alerta:'el correo esta vacio'})
    }
    if(mensaje.trim()===''){
        errores.push({alerta:'el mensaje esta vacio'})
    }


    if(errores.length>0){
        //consultar testimonialese existentes
        const testimoniales = await Testimonial.findAll()

        //mostrar en la vista los mensajes de erro
        res.render('testimoniales',{
            pagina:'Testimoniales',
            errores: errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    }else{
        //almacenar en la base de datos}
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
        
    }
    
}

export{
    guardarTestimoniales
}