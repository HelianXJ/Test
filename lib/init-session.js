import session from 'express-session';
import connectRedis from 'connect-redis';
import env from '../config/env';

export default (app) => {
    const config = env.session;
    const RedisStore = connectRedis(session);
    app.use(session({
        secret: config.secret,
        resave: false,
        saveUninitialized: true,
        store: new RedisStore({
            port: config.redis.port,
            host: config.redis.host,
            db: config.redis.db,
            ttl: 86400
        }),
        cookie: {
            path: '/',
            httpOnly: true,
            secure: env.https,
            maxAge: null
        }
    }));
};
