let reducer;
let name;

export default (state = {}, action) => {
    if (action.type === 'INIT_CONTAINER') {
        reducer = action.reducer;
        name = action.name;
        state.name = action.name;
        state.data = action.reducer(undefined, action);
    } else if (state.name !== undefined) {
        const data = reducer(state.data, action);
        if (data !== state.data) {
            state = {
                name: state.name,
                data: data
            };
        }
    }
    return state;
};
