const mongoose = require('mongoose');
const dbConfig = require('../database/database');
const Anime = require('../models/anime');

// Agregar o crear un nuevo anime a la categoria
async function createAnime(req, res) {
    const { title, genre, episodes } = req.body;
    const image = req.file ? req.file.filename : null; // Nombre del archivo subido
    try {
        const newAnime = new Anime({ title, genre, episodes, image });
        await newAnime.save();
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el anime', error });
    }
}

// Obtener todos los animes
async function getAnimes(req, res) {
    try {
        const animes = await Anime.find();
        res.json(animes);
    } catch(error){
        res.status(500).json({ message: 'Error al obtener los animes', error });
    }
}

// Obtener 1 anime en especifico
async function getOneAnime(req, res) {
    const { id } = req.params; // Extraer el ID de los parámetros de la URL
    try{
        const anime =  await Anime.findById(id); // Buscar el anime por su ID
        if(!anime){
            return res.status(404).json({ message: 'Anime no encontrado' });
        }
        res.json(anime); // Devolver el anime encontrado
    } catch(error){
        res.status(500).json({ message: 'Error al obtener el anime ', error });
    }
}

// Obtener animes filtro de búsqueda
async function getAnimesFilter(req, res) {
    const { query } = req.query; // obtener el parametro de búsqueda desde la URL
    try{
        let animes = await Anime.find(); 

        if(query){
            const search = query.toLowerCase();
            // Filtrar por titulo o genero que coincida parcialemente con la búsqueda
            animes = animes.filter(anime =>
                anime.title.toLowerCase().includes(search) ||
                anime.genre.toLowerCase().includes(search)
            );
        }
        res.json(animes); // Devolver los animes filtrados o todos si no hay query
    } catch(error){
        res.status(500).json({ message: 'Error al obtener los animes', error });
    }
}

// Actualizar un anime
async function updateAnime(req, res) {
    const { id } = req.params;
    const { title, genre, episodes, image } = req.body;
    try{
        const updateAnime = await Anime.findByIdAndUpdate(id, { title, genre, episodes, image }, { new: true});
        res.json(updateAnime);
    } catch(error){
        res.status(400).json({ message: 'Error al actualizar el anime', error });
    }
}

// Eliminar un anime
async function deleteAnime(req, res) {
    const { id } = req.params;
    try{
        await Anime.findByIdAndDelete(id);
        res.json({ message: 'Anime eliminado con exito' });
    }catch(error){
        res.status(400).json({ message: 'Error al eliminar el anime', error });
    }
}

module.exports = {
    createAnime,
    getAnimes,
    getAnimesFilter,
    getOneAnime,
    updateAnime,
    deleteAnime
}