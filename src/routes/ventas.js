const express = require('express');
const router = express.Router();

// Models
const Venta = require('../models/Venta');

// Helpers
const { isAuthenticated } = require('../helpers/auth');

// New ventas
router.get('/ventas/add', isAuthenticated, (req, res) => {
  res.render('ventas/new-venta');
});

router.post('/ventas/new-venta', isAuthenticated, async (req, res) => {
  const { idcliente, nombrecliente, nombrep } = req.body;
  const errors = [];
  if (!idcliente) {
    errors.push({text: 'Por favor escriba un título.'});
  }
  if (!nombrecliente) {
    errors.push({text: 'Por favor escriba una descripción'});
  }
  if (errors.length > 0) {
    res.render('ventas/new-venta', {
      errors,
      idcliente,
      nombrecliente
    });
  } else {
    const newVenta = new Venta({idcliente, nombrecliente, nombrep});
    newVenta.user = req.user.id;
    await newVenta.save();
    req.flash('success_msg', 'Se agregó su venta correctamente');
    res.redirect('/ventas');
  }
});

// Get All ventas
router.get('/ventas', isAuthenticated, async (req, res) => {
  const ventas = await Venta.find({user: req.user.id}).sort({date: 'desc'}) .lean();
  res.render('ventas/all-ventas', { ventas });
});

// Edit ventas
router.get('/ventas/edit/:id', isAuthenticated, async (req, res) => {
  const venta = await Venta.findById(req.params.id) .lean();
  if(venta.user != req.user.id) {
    req.flash('error_msg', 'No autorizado');
    return res.redirect('/ventas');
  } 
  res.render('ventas/edit-venta', { venta });
});

router.put('/ventas/edit-venta/:id', isAuthenticated, async (req, res) => {
  const {idcliente, nombrecliente, nombrep } = req.body;
  await Venta.findByIdAndUpdate(req.params.id, {title, description, price}) .lean() ;
  req.flash('success_msg', 'Nota actualizada correctamente');
  res.redirect('/ventas');
});

// Delete ventas
router.delete('/ventas/delete/:id', isAuthenticated, async (req, res) => {
  await Venta.findByIdAndDelete(req.params.id) .lean();
  req.flash('success_msg', 'Venta eliminada correctamente');
  res.redirect('/ventas');
});

module.exports = router;