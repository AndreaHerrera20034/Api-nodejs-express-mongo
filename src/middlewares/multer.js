const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'animes', // Carpeta donde se guardarán las imágenes en Cloudinary
        format: async (req, file) => 'jpg', // Opcional: Forzar formato
        public_id: (req, file) => Date.now() + '-' + file.originalname
    }
});

const upload = multer({ storage });
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, '../uploads/')); // Ruta relativa a la carpeta 'uploads'
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });

// // Filtrar los archivos permitidos (opcional)
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Tipo de archivo no permitido. Solo imágenes JPEG y PNG.'));
//     }
// };

// // Middleware de Multer
// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1024 * 1024 * 5 }, // Limitar tamaño a 5 MB
//     fileFilter: fileFilter
// });

module.exports = upload;