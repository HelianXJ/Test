import { Map } from 'immutable';

export default (state = Map({ index_show_content:"" }), action) => {
    switch (action.type) {
        case 'HELLO':
            return state.set('index_show_content', state.get('index_show_content') + action.content );
        case 'HELLO3':
            return state.set('index_show_content', state.get('index_show_content') + action.content + ':');
        case 'RECEIVE':
            state = state.set('orders', action.data);
            return state;
        default:
            return state;
    }
}
