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

    setImageSize () {
        var image = this.refs.mainImage;

        this.props.actions.setSize(image.width, image.height, image.naturalWidth, image.naturalHeight);
    }

    setTranslateListeners (event) {
        this.props.actions.setTranslate(true);
        this.props.actions.setMousePosition(event.clientX, event.clientY);
    }

    unsetTranslateListeners () {
        this.props.actions.setTranslate(false);
    }

    setSizeListeners (event) {
        event.stopPropagation();

        this.props.actions.setSizeFlag(true);
        this.props.actions.setMousePosition(event.clientX, event.clientY);

        this.unsetTranslateListeners();
    }

    unsetSizeListeners () {
        this.props.actions.setSizeFlag(false);
    }

    translate (event) {
        var state = this.props.photoCorpState;

        if (state.isTranslate) {
            let cx = event.clientX;
            let cy = event.clientY;
            let x = state.boxPosition.x + cx - state.mousePosition.x;
            let y = state.boxPosition.y + cy - state.mousePosition.y;

            x < 0 && (x = 0);
            y < 0 && (y = 0);

            if (x + state.boxStyle.width > state.size.width) {
                x = state.size.width - state.boxStyle.width;
            }

            if (y + state.boxStyle.height > state.size.height) {
                y = state.size.height - state.boxStyle.height;
            }

            this.props.actions.setBoxPosition(x, y);
            this.props.actions.setMousePosition(cx, cy);
        }
    }

    changeSize (event) {
        var state = this.props.photoCorpState;

        if (state.isSize) {
            let cx = event.clientX;
            let cy = event.clientY;
            let size = Math.max(state.boxStyle.width + cx - state.mousePosition.x,
                                state.boxStyle.height + cy - state.mousePosition.y);

            if (state.boxPosition.x + size > state.size.width) {
                size = state.size.width - state.boxPosition.x;
            }
            if (state.boxPosition.y + size > state.size.height) {
                size = state.size.height - state.boxPosition.y;
            }

            this.props.actions.setBoxSize(size);
            this.props.actions.setMousePosition(cx, cy);
        }
    }

    render () {
        var state = this.props.photoCorpState;

        return (
            <div className="photo-corp">
                <img src={state.mainImageSrc} alt="mainImage" ref="mainImage" onLoad={this.setImageSize.bind(this)}/>

                <div className="photo-corp_overlay">
                    <div className="photo-corp_box" style={state.boxStyle}
                         onMouseDown={this.setTranslateListeners.bind(this)}
                         onMouseUp={this.unsetTranslateListeners.bind(this)}
                         onMouseLeave={this.unsetTranslateListeners.bind(this)}
                         onMouseMove={this.translate.bind(this)}
                        >

                        <img draggable="false" src={state.mainImageSrc} style={state.addImageStyle} alt="additionalImage"/>

                        <i className="photo-corp_resize fa fa-hand-rock-o"
                           onMouseDown={this.setSizeListeners.bind(this)}
                           onMouseUp={this.unsetSizeListeners.bind(this)}
                           onMouseMove={this.changeSize.bind(this)}
                            ></i>
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