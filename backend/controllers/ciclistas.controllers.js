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
        const ciclista = await Ciclistas.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(ciclista)
        /* await ciclistas.save()
        res.send(ciclistas) */
    } catch (error) {
        res.status(404)
        res.send({error: "No existe"})
    }
}


export {obtenerCiclistas, obtenerCiclistasID, agregarCiclistas, borrarCiclistas, actualizarCiclistas};

