const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentaSchema = new Schema({
    nombrecliente: {
      type: String,
      required: true
    },
    nombrep: {
      type: String,
      required: true
    },
    valorp: {
      type: Number,
      required: true
    },
    cantidadp: {
      type: Number,
      required: false
    },
    date: {
      type: Date,
      default: Date.now
    },
    user: {
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model('Venta', VentaSchema);