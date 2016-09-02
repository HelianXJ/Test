const env = require('./config/env');

if (env.server.mode === 'dev') {
    module.exports = require('./webpack.config.dev.js');
} else {
    module.exports = require('./webpack.config.production.js');
}
