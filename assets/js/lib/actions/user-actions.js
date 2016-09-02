import { browserHistory } from 'react-router';
import { get, post } from 'lib/ajax';

export const initUser = () => {
    return (dispatch) => {
        get('/api/user', response => {
            response.json().then(data => {
                dispatch({
                    type: '/USER/INIT',
                    name: data.name
                });
            });
        });
    };
}

export const logout = () => {
    return (dispatch) => {
        post('/api/logout', response => {
            response.json().then(data => {
                if (data.result === 'success') {
                    dispatch({
                        type: '/USER/LOGOUT'
                    });
                    browserHistory.push('/login');
                }
            });
        });
    };
}
