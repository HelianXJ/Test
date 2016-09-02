'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _env = require('../config/env');

var _env2 = _interopRequireDefault(_env);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const serverDebug = (0, _debug2.default)('ops:server');
const port = _env2.default.port !== undefined ? _env2.default.port : 3000;
_app2.default.set('port', port);
const server = _http2.default.createServer(_app2.default);
server.on('error', error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = 'Pipe ' + port;
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