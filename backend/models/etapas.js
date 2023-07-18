import mongoose from "mongoose";

const etapasSchema = mongoose.Schema({
    numeroEtapa: {
        type: String,
        required: true,
        trim: true,
    },
    
fecha: {
        type: String,
        required: true,
        trim: true,
    },
    
salida: {
        type: String,
        required: true,
        trim: true,
    },
    
llegada : {
        type: String,
        required: true,
        trim: true,
    },
    distancia: {
        type: String,
        required: true,
        trim: true,
    },
    
ganador: {
        type: String,
        required: true,
        trim: true,
    },
    
descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    premioMontana: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Etapas = mongoose.model('etapas', etapasSchema);

    export default Etapas;