// importaciones como los import ... from ...
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
// llamar controladores
const animeController = require('../controllers/animeController');

// const { route } = require('../app');

// ---------------rutas-----------------------
router.post('/post/crear', upload.single('image'), animeController.createAnime);
router.get('/animes', animeController.getAnimes);
router.get('/animes/:id', animeController.getOneAnime);
router.put('/update/animes/:id', upload.single('image'), animeController.updateAnime);
router.delete('/delete/anime/:id', animeController.deleteAnime);

// Filtro de búsqueda
router.get('/search/animes', animeController.getAnimesFilter);


//Ejecutar con npm run dev

// exportacion como react export default
module.exports = router;