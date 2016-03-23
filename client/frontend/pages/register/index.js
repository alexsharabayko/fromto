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

    changeGoro () {
        this.props.actions.goro('2323');
    }

    removeEmptyClass (field) {
        this.props.actions.setVisited(field.name);
    }

    handleFieldChange (event) {

    }

    createInputClass (field) {
        return `register-form_field_input ${field && field.visited ? '' : 'empty'}`;
    }

    renderFields () {
        var fields = this.props.registerState.fields;

        return fields.map(field => {
            return (
                <div className="register-form_field" key={field.name}
                     onBlur={this.removeEmptyClass.bind(this, field)} onChange={this.handleFieldChange.bind(this)}>

                    <input className={this.createInputClass(field)} type={field.type}
                           required minLength={field.minLength} maxLength={field.maxLength} pattern={field.pattern}/>
                    <span className="register-form_field_label">{field.title}</span>
                    <span className="register-form_field_error">{field.errorMessage}</span>
                </div>
            );
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

                    <form className="register-form" ref="form" onBlur={this.removeEmptyClass.bind(this)}>
                        {this.renderFields()}

                        <div className="register-form_field col-70 stick">
                            <label className="register-form_field_radio">
                                <input type="radio" name="go" defaultChecked/>
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