import Ciclistas from "../models/ciclistas.js"
const obtenerCiclistas = async (req,res) => {
    try {
        const ciclista = await Ciclistas.find();
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}

const obtenerCiclistasID = async (req,res) => {
    try {
        const ciclista = await Ciclistas.findOne({_id:req.params.id});
        res.json(ciclista);
    } catch (error) {
        console.log(error);
    }
}


const agregarCiclistas = async (req, res) => {
    const {numeroCiclista, nombreCiclista, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img} = req.body
    const ciclista = new Ciclistas({numeroCiclista, nombreCiclista, equipo, nacionalidad, edad, recorrido, puntos, lider, rendimiento, img});
    //Nombre ciclista 
    const NombreCiclista = await Ciclistas.findOne({nombreCiclista})
    const numeroC = await Ciclistas.findOne({numeroCiclista})
    if(NombreCiclista)
        return res.status(400).json({message:"El ciclista ya esta registrado"});
    if(numeroC)
        return res.status(400).json({message:"El numero de Ciclista ya esta registrado"});

    await ciclista.save();
    res.json(ciclista);
}

const borrarCiclistas = async (req, res) => { 

    try {
        await Ciclistas.deleteOne({_id:req.params.id})
        res.status(204).send()
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }

}

const actualizarCiclistas = async (req, res) => {
    try {
        const {nombreCiclista, numeroCiclista, img} = req.body
        const nameCiclista = await Ciclistas.findOne({nombreCiclista});
        const numCiclista = await Ciclistas.findOne({numeroCiclista});
        const imgCiclista = await Ciclistas.findOne({img});
        if(nameCiclista)
            if((nameCiclista._id).toString() != req.params.id)
            return res.status(400).json({message:"EL nombre ya se encuentra registrado"});
        if(numCiclista)
            if((numCiclista._id).toString() != req.params.id)
            return res.status(400).json({message:"El numero ya se encuentra registrado"});
        if(imgCiclista)
            if((imgCiclista._id).toString() != req.params.id)
            return res.status(400).json({message:"La imagen ya esta en uso"})
        const ciclista = await Ciclistas.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(ciclista)
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
        console.log(error);
    } 
}


export {obtenerCiclistas, obtenerCiclistasID, agregarCiclistas, borrarCiclistas, actualizarCiclistas};

