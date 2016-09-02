import { browserHistory } from 'react-router';
import { post } from 'lib/ajax';

export const login = (username, password, csrf) => {
    return (dispatch) => {
        post('/api/login', {
            body: {
                username: username,
                password: password,
            },
            success: response => {
                response.json().then(data => {
                    if (data.result === 'success') {
                        dispatch({
                            type: '/USER/LOGIN_SUCCESS',
                            username: username
                        });
                        browserHistory.push('/');
                    } else {
                        dispatch({
                            type: 'LOGIN_FAILED',
                            data: data.result
                        });
                    }
                })
            }
        });
    };
};
