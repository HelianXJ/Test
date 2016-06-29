export const helloFromIndexShow = (text) => {
    return {
        type: 'HELLO',
        content: 'x'
    }
}
let xx;
export const helloFromIndexShow2 = (text) => {
    return {
        type: 'HELLO3',
        content: 'changed'
    }
}

export const getContent = () => (dispatch) => {
    fetch('/api/orders').then(response =>
        response.text().then(data => dispatch(receive(data)))
    );
}

// export const logout = () => (dispatch) => {
//     post('/logout').then(response =>
//         response.text().then(data => dispatch(receive(data)))
//     );
// }

const receive = (data) => {
    return {
        type: 'RECEIVE',
        data: data 
    }
}
