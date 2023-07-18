import Equipos from "../models/equipos.js";

const obtenerEquipos = async (req, res) => {
    const equipo = await Equipos.find();
    res.json(equipo)
}

const obtenerEquiposID = async (req, res) => {
    const equipo = await Equipos.findOne({_id: req.params.id})
    res.json(equipo)
}

const agregarEquipos = async (req,res) => { 
    const equipo = new Equipos(req.body);
    try {
        const nuevoEquipo = await equipo.save();
        res.json(nuevoEquipo)
    } catch (error) {
        console.log(error);
    }
}

const borrarEquipos = async (req, res) => {
    try {
        await Equipos.deleteOne({_id: req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarEquipos = async (req, res) => {
    try {
        const equipo = await Equipos.findOne({_id:req.params.id});
        if (req.body.numeroEquipo){
            equipo.numeroEquipo = req.body.numeroEquipo;
        }
        if (req.body.Contacto){
            equipo.nombre = req.body.nombre;
        }
        if (req.body.pais){
            equipo.pais = req.body.pais;
        }
        if (req.body.director){
            equipo.director = req.body.director;
        }
        if (req.body.descripcion){
            equipo.descripcion = req.body.descripcion;
        }
        if (req.body.ubicacion){
            equipo.ubicacion = req.body.ubicacion;
        }
        if (req.body.patrocinador){
            equipo.patrocinador = req.body.patrocinador;
        }
        if (req.body.estadio){
            equipo.estadio = req.body.estadio;
        }

        await equipo.save()
        res.send(equipo)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}


export {obtenerEquipos, obtenerEquiposID, agregarEquipos, borrarEquipos, actualizarEquipos};

