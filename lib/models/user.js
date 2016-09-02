import model from '../util/model';

export default model('User', {
    name: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    created_time:{
        type: Date,
        required: true
    },
});
