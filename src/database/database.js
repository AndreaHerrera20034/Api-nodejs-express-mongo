const mongoose = require('mongoose');
// const sql = require('mssql');
//const config = require('../config');

// const dbSettings = {
//     server: 'localhost',
//     database: 'blog',
//     user: 'sa',
//     password: 'andrea11037',
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     },
// };

// Configurar la URL de conexión a MongoDB (puedes usar la URL de MongoDB Atlas o local)
const dbSettings = {
    url: process.env.MONGO_URI || 'mongodb://localhost:27017/animeDB'
};

async function getConnection() {
    try {
        await mongoose.connect(dbSettings.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err);
    }
}

// Llamamos a la función para iniciar la conexión
getConnection();

module.exports = mongoose;

// async function getConnection()  {
//     try {
//         const pool = await sql.connect(dbSettings);
//         const result = await pool.request().query("SELECT 1");
//         console.log(result);
//     } catch (err) {
//         console.error('Database connection failed:', err);
//     }
// }

// getConnection();

// module.exports = dbSettings;


// const sql = require('mssql');
// //const config = require('../config');

// const dbSettings = {
//     server: 'localhost',
//     database: 'blog',
//     user: 'sa',
//     password: 'andrea11037',
//     options: {
//         encrypt: true,
//         trustServerCertificate: true
//     },
// };

// async function getConnection()  {
//     const pool = await sql.connect(dbSettings);
//     const result = await pool.request().query("SELECT 1");
//     console.log(result);
// }

// getConnection();