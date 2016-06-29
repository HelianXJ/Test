import Immutable from 'immutable';

export default (state = { login_show_content: '' }, action) => {
    switch (action.type) {
        case 'HELLO':
            state = { content: state.login_show_content + action.content };
            return state;
        default:
            return state;
    }
};
