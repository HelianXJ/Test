import path from 'path';

export default (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
};
