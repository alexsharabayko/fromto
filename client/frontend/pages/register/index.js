import React, {PropTypes} from 'react';
import PageComponent from 'core/page-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from 'actions/register-actions';
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
                console.log('invalid');

                event.target.setCustomValidity('');
            });
        });
    }

    changeGoro () {
        this.props.actions.goro('2323');
    }

    removeEmptyClass (event) {
        event.target.classList.remove('empty');
    }

    render() {
        return (
            <div className="register">
                <div className="register-wrapper">
                    <div className="register-logo">
                        <LogoComponent />
                        <span className="register-logo_small">Registration</span>
                    </div>

                    <form className="register-form" ref="form" onBlur={this.removeEmptyClass.bind(this)}>
                        <div className="register-form_field">
                            <input className="register-form_field_input empty" type="text" required/>
                            <span className="register-form_field_label">Username</span>
                            <span className="register-form_field_error">Error validation message</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input empty" type="password" required/>
                            <span className="register-form_field_label">Password</span>
                            <span className="register-form_field_error">Error validation message</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input empty" type="email" required/>
                            <span className="register-form_field_label">Email</span>
                            <span className="register-form_field_error">Error validation message</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input empty" type="text" required/>
                            <span className="register-form_field_label">First name</span>
                            <span className="register-form_field_error">Error validation message</span>
                        </div>

                        <div className="register-form_field">
                            <input className="register-form_field_input empty" type="text" required/>
                            <span className="register-form_field_label">Last name</span>
                            <span className="register-form_field_error">Error validation message</span>
                        </div>

                        <div className="register-form_field col-70 stick">
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
                            <span className="register-form_field_label">Register me as</span>
                        </div>

                        <div className="register-form_field col-30">
                            <FileUploadComponent />
                        </div>

                        <button className="register-form_submit">Submit</button>
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
        registerState: state.registerState
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
)(RegisterPage);