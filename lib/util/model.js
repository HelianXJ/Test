import mongoose from 'mongoose';
import env from '../../config/env';

mongoose.connect(env.mongodb_connection_string);

export default (name, schema) => {
    return mongoose.model(name, schema, name);
};
