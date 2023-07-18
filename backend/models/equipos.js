import mongoose from "mongoose";

const equiposSchema = mongoose.Schema({
numeroEquipo: {
        type: String,
        required: true,
        trim: true,
    },
    
nombre: {
        type: String,
        required: true,
        trim: true,
    },
    
pais: {
        type: String,
        required: true,
        trim: true,
    },
    director: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    
ubicacion: {
        type: String,
        required: true,
        trim: true,
    },
    patrocinador: {
        type: String,
        required: true,
        trim: true,
    },
    estadio: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Equipos = mongoose.model('equipos', equiposSchema);

    export default Equipos;