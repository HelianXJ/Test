import { Map } from 'immutable';

export default (state = Map({ index_show_content:"" }), action) => {
    switch (action.type) {
        case 'RECEIVE':
            state = state.set('orders', action.data);
            return state;
        default:
            return state;
    }
}