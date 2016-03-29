import React, {PropTypes} from 'react';
import PageComponent from 'core/page-component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/register-actions';

import language from 'constants/languages';

import LogoComponent from 'core/logo';
import FileUploadComponent from 'core/file-upload';
import PhotoCorpView from 'core/photo-corp';

import './style.less';

class RegisterPage extends PageComponent {
    constructor (props) {
        super(props);

        this.state = {};
    }

    removeEmptyClass (field) {
        this.props.actions.setVisited(field.name);
    }

    removeAllEmptyClass () {
        this.props.actions.setAllVisited();
    }

    handleFieldChange (field, event) {
        var validity = event.target.validity;
        var errorMessage;

        if (!validity.valid) {
            if (validity.valueMissing) {
                errorMessage = language.translate('register.validation.errorMessage.valueMissing', field.title);
            }
            if (validity.tooShort) {
                errorMessage = language.translate('register.validation.errorMessage.tooShort', field.title);
            }
            if (validity.tooLong) {
                errorMessage = language.translate('register.validation.errorMessage.tooLong', field.title);
            }
            if (validity.patternMismatch) {
                errorMessage = language.translate('register.validation.errorMessage.patternMismatch', field.title);
            }

            this.props.actions.setErrorMessage(field.name, errorMessage);
        }
    }

    createInputClass (field) {
        return `register-form_field_input ${field && field.visited ? '' : 'empty'}`;
    }

    renderFields () {
        var fields = this.props.registerState.fields;

        return fields.map(field => {
            return (
                <div className="register-form_field" key={field.name}>
                    <input className={this.createInputClass(field)} type={field.type}
                           required minLength={field.minLength} maxLength={field.maxLength} pattern={field.pattern}
                           onBlur={this.removeEmptyClass.bind(this, field)} onChange={this.handleFieldChange.bind(this, field)}/>
                    <span className="register-form_field_label">{field.title}</span>
                    <span className="register-form_field_error">{field.errorMessage}</span>
                </div>
            );
        });
    }

    onSelectImage (files) {
        new PhotoCorpView({
            image: files[0]
        }).then(this.setBounds.bind(this));
    }

    setBounds (bounds) {
        this.refs.mainImageX.value = bounds.x;
        this.refs.mainImageY.value = bounds.y;
        this.refs.mainImageWidth.value = bounds.width;
        this.refs.mainImageHeight.value = bounds.height;
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
                            <FileUploadComponent onSelect={this.onSelectImage.bind(this)}/>
                            <input type="hidden" name="mainImageX" ref="mainImageX" />
                            <input type="hidden" name="mainImageY" ref="mainImageY" />
                            <input type="hidden" name="mainImageWidth" ref="mainImageWidth" />
                            <input type="hidden" name="mainImageHeight" ref="mainImageHeight" />
                        </div>

                        <button className="register-form_submit" onClick={this.removeAllEmptyClass.bind(this)}>Submit</button>
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