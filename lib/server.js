import app from './app';
import env from '../config/env';
import debug from 'debug';
import http from 'http';

const serverDebug = debug('ops:server');
const port = env.port !== undefined ? env.port : 3000;
app.set('port', port);
const server = http.createServer(app);
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = 'Pipe ' + port ;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.on('listening', () => {
    const addr = server.address();
    const bind = 'port ' + addr.port;
    serverDebug('Listening on ' + bind);
});
server.listen(port);
