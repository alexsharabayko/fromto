import React, {PropTypes} from 'react';
import PageComponent from 'core/page-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/home-actions';
import LogoComponent from 'core/logo';

import './style.less';

class RegisterPage extends PageComponent {
    componentDidMount () {
        super.componentDidMount();
    }

    render() {
        return (
            <div className="register">
                <div className="register-wrapper">
                    <div className="register-logo">
                        <LogoComponent />
                        <span className="register-logo_small">Registration</span>
                    </div>

                    <form className="register-form">
                        <div className="register-form_field">
                            <input className="register-form_field_input" type="text"/>
                            <span className="register-form_field_label">Username</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="password"/>
                            <span className="register-form_field_label">Password</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="email"/>
                            <span className="register-form_field_label">Email</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="text"/>
                            <span className="register-form_field_label">First name</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="text"/>
                            <span className="register-form_field_label">Last name</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="text"/>
                            <span className="register-form_field_label">Username</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input" type="radio"/>
                            <input className="register-form_field_input" type="radio"/>
                            <span className="register-form_field_label fixed">I'm a</span>
                            <span className="register-form_field_error fixed">Error validation message</span>
                            <span className="register-form_field_info fixed">Success info</span>
                        </div>
                    </form>
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
)(RegisterPage);