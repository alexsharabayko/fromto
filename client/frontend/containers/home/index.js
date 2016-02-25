import React, {PropTypes} from 'react';
import BaseComponent from '../base-container';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/home-actions';

import './style.less';

class Home extends BaseComponent {
    componentDidMount () {
        super.componentDidMount();
    }

    render() {
        return (
            <p>Hello world from home!</p>
        );
    }
}

//App.propTypes = {
//    actions: PropTypes.object.isRequired,
//    homeState: PropTypes.object.isRequired
//};

function mapStateToProps(state) {
    return {
        homeState: state.homeState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);