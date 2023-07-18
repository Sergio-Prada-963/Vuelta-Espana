import mongoose from "mongoose";

const ciclistasSchema = mongoose.Schema({
    numeroCiclista: {
        type: Number,
        required: [true,'Numero es requerido'],
        trim: true,
    },
    nombreCiclista: {
        type: String,
        required: [true,'Nombre es requerido'],
        trim: true,
    },
    equipo: {
        type: String,
        required: [true,'Equipo es requerido'],
        trim: true,
    },
    nacionalidad: {
        type: String,
        required: [true,'nacionalidad es requerido'],
        trim: true,
    },
    edad: {
        type: Number,
        required: [true,'edad es requerido'],
        trim: true,
    },
    recorrido: {
        type: Number,
        required: [true,'recorrido es requerido'],
        trim: true,
    },
    puntos: {
        type: Number,
        required: [true,'puntos es requerido'],
        trim: true,
    },
    lider: {
        type: Number,
        required: [true,'lider es requerido'],
        trim: true,
    },
    rendimiento: {
        type: Number,
        required: [true,'rendimiento es requerido'],
        trim: true,
    },
    img: {
        type: String,
        required: [true,'img es requerido'],
        trim: true,
    }
    },
    {
        timestamps: true,
    }
    );

    const Ciclistas = mongoose.model('ciclistas', ciclistasSchema);

    export default Ciclistas;
    