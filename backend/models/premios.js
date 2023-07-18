import mongoose from "mongoose";

const premiosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    descripcion: {
        type: String,
        required: true,
        trim: true,
    },
    ganador: {
        type: String,
        required: true,
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Premios = mongoose.model('premios', premiosSchema);

    export default Premios;