import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/photo-corp-actions';

class PhotoCutterComponent extends React.Component {
    componentDidMount () {
        var fr = new FileReader();

        fr.onload = function () {
            this.setState((prevSate) => {
                this.props.actions.setMainImage(fr.result);
            });

            this.forceUpdate();
        }.bind(this);

        fr.readAsDataURL(this.props.image);
    }

    prepareToTranslate () {
        this.props.actions.setTranslate(true);
    }

    translate (event) {

    }

    render () {
        var state = this.props.photoCorpState;

        return (
            <div className="photo-corp">
                <img src={state.mainImageSrc} alt="mainImage"/>

                <div className="photo-corp_overlay">
                    <div className="photo-corp_box" style={state.boxStyle}
                         onMouseDown={this.prepareToTranslate.bind(this)}
                         onMouseMove={this.translate.bind(this)}
                        >
                        <img draggable="false" src={state.mainImageSrc} alt="additionalImage"/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        photoCorpState: state.photoCorpState
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
)(PhotoCutterComponent);