const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port,function () {
    console.log('Servidor corriendo en el puerto : ' + port);
});