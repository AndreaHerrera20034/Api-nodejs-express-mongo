require('./database/database');
const app = require('./app');

app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en el puerto", app.get("port"));
    // console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});