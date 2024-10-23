const mongoose = require('mongoose');
const { Schema } = mongoose;

// Ddefinir el esquema de los animes
const animeSchema = new Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true},
    episodes: { type: Number, required: true },
    image: { type: String, required: true}
});

// Crear el modelo
const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;