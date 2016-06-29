//if (process.env.NODE_ENV === 'production') {
//    //cmd: export NODE_ENV=development
//    module.exports = require('./webpack.config.prod.js')
//} else {
//    process.env.NODE_ENV = 'development'
    module.exports = require('./webpack.config.dev.js')
//}
