const express = require('express');
const router=express.Router();
router.get('/index', (req, res)=>{
  res.render('index');
});
router.get('/contactus', (req, res)=>{
  res.render('contactus');
});
router.get('/covid19updated', (req, res)=>{
  res.render('covid19updated');
});
router.get('/deluxeroom', (req, res)=>{
  res.render('deluxeroom');
});
router.get('/dining', (req, res)=>{
  res.render('dining');
});
router.get('/gallery', (req, res)=>{
  res.render('gallery');
});
router.get('/menu', (req, res)=>{
  res.render('menu');
});
router.get('/menu2', (req, res)=>{
  res.render('menu2');
});
router.get('/premiumroom', (req, res)=>{
  res.render('premiumroom');
});
router.get('/room', (req, res)=>{
  res.render('room');
});
router.get('/standardroom', (req, res)=>{
  res.render('standardroom');
});
router.get('/superiorroom', (req, res)=>{
  res.render('superiorroom');
});
router.get('/transport', (req, res)=>{
  res.render('transport');
});
router.get('/cancelstandardroom', (req, res)=>{
  res.render('cancelstandardroom');
});
router.get('/loginpage', (req, res)=>{
  res.render('loginpage');
});
router.get('/registrationpage', (req, res)=>{
  res.render('registrationpage');
});
router.get('/display', (req, res)=>{
  res.render('display');
});
router.get('/user', (req, res)=>{
  res.render('user');
});
router.get('/canceldeluxeroom', (req, res)=>{
  res.render('canceldeluxeroom');
});
router.get('/cancelsuperiorroom', (req, res)=>{
  res.render('cancelsuperiorroom');
});
router.get('/cancelpremiumroom', (req, res)=>{
  res.render('cancelpremiumroom');
});
router.get('/transportation', (req, res)=>{
  res.render('transportation');
});
router.get('/temp', (req, res)=>{
  res.render('temp');
});
router.get('/tbook', (req, res)=>{
  res.render('tbook');
});
router.get('/spa', (req, res)=>{
  res.render('spa');
});
router.get('/gym', (req, res)=>{
  res.render('gym');
});
router.get('/food', (req, res)=>{
  res.render('food');
});
router.get('/services', (req, res)=>{
  res.render('services');
});
router.get('/spanew', (req, res)=>{
  res.render('spanew');
});
router.get('/spainsert', (req, res)=>{
  res.render('spainsert');
});
router.get('/gymnew', (req, res)=>{
  res.render('gymnew');
});
router.get('/gyminsert', (req, res)=>{
  res.render('gyminsert');
});
router.get('/foodnew', (req, res)=>{
  res.render('foodnew');
});
router.get('/foodinsert', (req, res)=>{
  res.render('foodinsert');
});


module.exports=router;
