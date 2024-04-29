const mongoose = require('mongoose');

const habitacionSchema = mongoose.Schema({
    habitacion :{
        type: String,
        required:true
    },
    conteomaximo:{
        type: Number,
        required:true
    },
    numerotelfono:{
        type:Number,
        required:true
    },
    costopordia:{
        type:Number,
        required: true
    },
    imagenurls :[],
    reservasactuales:[],
    tipo:{
        type:String,
        reuired:true
    },
    descripcion:{
        type:String,
        required:true
    }
},{
marcadeltiempo : true,

})

const habitacionModel = mongoose.model('habitaciones', habitacionSchema)
module.exports = habitacionModel