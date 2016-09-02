export default (state = {}, action) => {
    if (action.type === '/USER/LOGOUT') {
        return {};
    } else if (action.type === '/USER/INIT') {
        return {
            name: action.name
        };
    }
    return state;
};
