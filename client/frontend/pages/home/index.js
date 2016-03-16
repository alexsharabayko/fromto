import React, {PropTypes} from 'react';
import PageComponent from 'core/page-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/home-actions';

import LogoComponent from 'core/logo';

import './style.less';

class HomePage extends PageComponent {
    constructor (props) {
        super(props);

        this.state = {
            title: this.props.homeState.title
        };
    }

    scrollHomeTape (event) {
        event.preventDefault();

        event.currentTarget.scrollLeft -= event.nativeEvent.wheelDelta;
    }

    render() {
        return (
            <div className="home" onWheel={this.scrollHomeTape}>
                <div className="home-tape">
                    <div className="home-intro home-tape_item">
                        <LogoComponent />
                    </div>
                    <div className="home-login home-tape_item"></div>
                    <div className="home-contacts home-tape_item"></div>
                </div>
            </div>
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
        //actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);