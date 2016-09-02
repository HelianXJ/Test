import { initUser } from 'lib/actions/user-actions';

export default store => next => action => {
    if (action.type === '@@router/LOCATION_CHANGE' && action.payload.pathname !== '/login') {
        if (store.getState().user.name === undefined) {
            store.dispatch(initUser());
        }
    }
    next(action);
};
