import reducer from 'assets/js/containers/index/show/reducer';
let containerReducer;
let containerName;

export default (state = {}, action) => {
    if (action.type === 'INIT_CONTAINER') {
        containerReducer = action.reducer;
        containerName = action.name;
        state.name = action.name;
        state.value = action.reducer(undefined, action);
    } else if (state.name !== undefined) {
        const value = containerReducer(state.value, action);
        if (value !== state.value) {
            state = {
                name: state.name,
                value: value
            };
        }
    }
    return state;
}

//export containerInfo;

if (module.hot) {
    module.hot.accept('assets/js/containers/index/show/reducer', () => {
        console.log('xx1');
        if (containerName === 'IndexShow') {
            console.log('xx2');
            containerReducer = require('assets/js/containers/index/show/reducer').default;
        }
    });
}
