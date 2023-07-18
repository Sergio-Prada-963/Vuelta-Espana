import Premios from "../models/premios.js";

const obtenerPremios= async (req,res) => {
    const premio = await Premios.find();
    res.json(premio);
}

const obtenerPremiosID = async (req,res) => {
    const premio = await Premios.findOne({_id:req.params.id});
    res.json(premio);
}


const agregarPremios = async (req, res) => {
    const premios = new Premios(req.body);
    try {
        const nuevoPremios = await premios.save();
        res.json(nuevoPremios)
    } catch (error) {
        console.log(error);
    }
}

const borrarPremios = async (req, res) => { 

    try {
        await Premios.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarPremios = async (req, res) => {
    try {
        const premio = await Premios.findOne({_id:req.params.id});
        if (req.body.nombre){
            premio.nombre = req.body.nombre;
        }
        if (req.body.descripcion){
            premio.descripcion = req.body.descripcion;
        }
        if (req.body.ganador){
            premio.ganador = req.body.ganador;
        }
        await premio.save()
        res.send(premio)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}

export {obtenerPremios, obtenerPremiosID, agregarPremios, borrarPremios, actualizarPremios}