export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            state = { message: action.data };
            return state;
        default:
            return state;
    }
};
