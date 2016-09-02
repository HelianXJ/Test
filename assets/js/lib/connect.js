import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import store from './store';

export default (actions, reducer) => {
    return (Component) => {
        const mapStateToProps = (state) => {
            if (state.container.name !== Component.name) {
                store.dispatch({
                    type: 'INIT_CONTAINER',
                    name: Component.name,
                    reducer
                });
            }
            return {
                state: state.container.data
            }
        };
        const mapDispatchToProps = (dispatch) => {
            return {
                actions: bindActionCreators(actions, dispatch)
            };
        }
        return connect(mapStateToProps, mapDispatchToProps)(Component);
    }
};
