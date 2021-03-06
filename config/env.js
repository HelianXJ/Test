module.exports = {
    mode: 'dev',
    session: {
        redis: {
            host: '127.0.0.1',
            port: 6379,
            db: 0,
        },
        secret: 'sfy10241024',
    },
    domain: 'ops.sfydev.com',
    mongodb_connection_string: 'mongodb://mongo:test1111@localhost/express-mongoose-demo',
    https: false,
};
