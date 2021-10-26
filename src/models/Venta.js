const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentaSchema = new Schema({
    idcliente: {
    type: Number,
    required: true
  },
    nombrecliente: {
      type: String,
      required: true
    },
    nombrep: {
      type: String,
      required: true
    },
    valorp: {
      type: String,
      required: true
    },
    cantidadp: {
      type: String,
      required: true
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