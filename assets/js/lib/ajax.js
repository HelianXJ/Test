import { browserHistory } from 'react-router';

const send = (url, options) => {
    return fetch(url, options).then(response => {
        if (response.status === 401 && options.redirect401 !== false) {
            browserHistory.push('/login');
        }
        if (response.status < 400) {
            if (options.success !== undefined) {
                options.success(response);
            }
        } else {
            if (options.error !== undefined) {
                options.error(response);
            }
        }
        return response;
    });
};

export const get = (url, options = {}) => {
    if (typeof options === 'function') {
        options = {
            success: options
        };
    }
    const body = options.body === undefined ? {} : options.body;
    options = Object.assign({
        method: 'GET',
        credentials: 'same-origin',
        redirect: 'follow',
    }, options);
    return send(url, options);
};

export const post = (url, options = {}) => {
    if (typeof options === 'function') {
        options = {
            success: options
        };
    }
    if (options.body === undefined) {
        options.body = {};
    }
    options.body._csrf = document.getElementById('js-csrf-token').value;
    options.body  = JSON.stringify(options.body);
    options = Object.assign({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin',
        redirect: 'follow',
    }, options);
    return send(url, options);
};
