import env from '../config/env';
import morgan from 'morgan';
import fs from 'fs';

export default (app) => {
    if (env.mode === 'dev') {
        app.use(morgan('dev'));
    }
    const accessLogStream = fs.createWriteStream(__dirname + '/../log/access.log', { flags: 'a' });
    app.use(morgan('combined', { stream: accessLogStream }));
}
