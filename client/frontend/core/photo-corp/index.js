import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from 'actions/photo-corp-actions';

import PopupView from 'core/popup';
import PhotoCutterComponent from './component';

import './style.less';

class PhotoCorpView {
    constructor (options) {
        return new Promise((resolve, reject) => {
            new PopupView({
                customClass: 'photo-corp-popup',
                bounds: {},
                buttons: [
                    {
                        text: 'It is!',
                        onClick: function (event) {
                            //var state = this.refs.content.state,
                            //    sw = state.size.width,
                            //    sh = state.size.height,
                            //    nw = state.naturalSize.width,
                            //    nh = state.naturalSize.height;
                            //
                            //resolve({
                            //    x: parseInt(nw * state.areaPosition.x / sw, 10),
                            //    y: parseInt(nh * state.areaPosition.y / sh, 10),
                            //    width: parseInt(nw * state.areaStyle.width / sw, 10),
                            //    height: parseInt(nh * state.areaStyle.height / sh, 10)
                            //});

                            this.closePopup();
                        }
                    }
                ],
                data: {
                    title: 'Select image bounds',
                    content: <PhotoCutterComponent image={options.image} />
                }
            });
        });
    }
}

export default PhotoCorpView;