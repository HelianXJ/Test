import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import csurf from 'csurf';
import initView from './init-view';
import initRoutes from './init-routes';
import initPassport from './init-passport';
import initSession from './init-session';
import initAccessLog from './init-access-log';
import initErrorHandler from './init-error-handler';
import env from '../config/env';

const app = express();
initAccessLog(app);
initView(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(env.session_secret));
app.use(csurf({ cookie: true }));
initSession(app);
initPassport(app);
initRoutes(app);
initErrorHandler(app);

export default app;
