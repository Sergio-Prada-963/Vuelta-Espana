import Etapas from "../models/etapas.js"

const obtenerEtapas = async (req, res) => {
    const etapa = await Etapas.find();
    res.json(etapa);
};

const obtenerEtapasID = async (req, res) => {
    const etapa = await Etapas.findOne({id: req.params.id});
    res.json(etapa);
};

const agregarEtapas = async (req, res) => { 
    const etapa = new Etapas(req.body);
    try {
        const nuevaEtapa = await etapa.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
};

const borrarEtapas = async (req, res) => {
    try {
        await Etapas.deleteOne({id: req.params.id});
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({ error: "No existe"});
    }
};   

const actualizarEtapas = async (req, res) => {
    try {
        const etapa = await Etapas.findOne({id: req.params.id}); 
        if (req.body.numeroEtapa) {
            etapa.numeroEtapa = req.body.numeroEtapa;
        }
        if (req.body.fecha) {
            etapa.fecha = req.body.fecha;
        }
        if (req.body.salida) {
            etapa.salida = req.body.salida;
        }
        if (req.body.llegada) {
            etapa.llegada = req.body.llegada;
        }
        if (req.body.distancia) {
            etapa.distancia = req.body.distancia;
        }
        if (req.body.ganador) {
            etapa.ganador = req.body.ganador;
        }
        if (req.body.descripcion) {
            etapa.descripcion = req.body.descripcion;
        }
        if (req.body.premioMontana) {
            etapa.premioMontana = req.body.premioMontana;
        }
        await etapa.save()
        res.send(etapa)
    } catch (error) {
        res.status(404)
        res.send({ error: "No existe"});
    }

}
export {obtenerEtapas, obtenerEtapasID, agregarEtapas, borrarEtapas, actualizarEtapas};