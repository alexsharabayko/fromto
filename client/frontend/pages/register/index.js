import React, {PropTypes} from 'react';
import PageComponent from 'core/page-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/home-actions';
import LogoComponent from 'core/logo';
import FileUploadComponent from 'core/file-upload';

import './style.less';

class RegisterPage extends PageComponent {
    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount () {
        super.componentDidMount();

        Array.from(this.refs.form.elements).forEach((element) => {
            element.addEventListener('invalid', (event) => {
                event.target.parentElement.classList.add('invalid');

                event.target.setCustomValidity('');
            });
        });
    }

    render() {
        return (
            <div className="register">
                <div className="register-wrapper">
                    <div className="register-logo">
                        <LogoComponent />
                        <span className="register-logo_small">Registration</span>
                    </div>

                    <form className="register-form" ref="form">
                        <div className="register-form_field">
                            <input className="register-form_field_input" type="text" required minLength="10" maxLength="6"/>
                            <span className="register-form_field_label">Username</span>
                            <span className="register-form_field_error">Error validation message</span>
                            <span className="register-form_field_info">Success info</span>
                        </div>

                        <div className="register-form_field valid">
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

                        <div className="register-form_field invalid">
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
                            <label className="register-form_field_radio">
                                <input type="radio" name="go"/>
                                <i className="fa fa-cab"></i>
                                <span className="text">Driver</span>
                            </label>
                            <label className="register-form_field_radio">
                                <input type="radio" name="go"/>
                                <i className="fa fa-user"></i>
                                <span className="text">Passenger</span>
                            </label>
                            <span className="register-form_field_label fixed">Register me as</span>
                        </div>

                        <div className="register-form_field">
                            <FileUploadComponent />
                        </div>

                        <button>Submit</button>
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