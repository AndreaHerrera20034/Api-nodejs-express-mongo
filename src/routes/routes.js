// importaciones como los import ... from ...
const express = require('express');
const router = express.Router();

// llamar controladores
const animeController = require('../controllers/animeController');

// const { route } = require('../app');

// ---------------rutas-----------------------
router.post('/post/crear', animeController.createAnime);
router.get('/animes', animeController.getAnimes);
router.get('/animes/:id', animeController.getOneAnime);
router.put('/update/animes/:id', animeController.updateAnime);
router.delete('/delete/anime/:id', animeController.deleteAnime);

//Ejecutar con npm run dev

// exportacion como react export default
module.exports = router;