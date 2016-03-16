import React, {PropTypes} from 'react';
import BaseComponent from 'core/base-component';

import './style.less';

class Logo extends BaseComponent {
    render() {
        var src = require('img/logo/driver.png');

        return (
            <div className="logo">
                <div className="logo_img logo_child image-wrapper">
                    <img src={src} alt="driver"/>
                </div>
                <div className="logo_text logo_child">
                    <span className="logo_text_item">From&nbsp;</span>
                    <span className="logo_text_item">- To</span>
                </div>
            </div>
        );
    }
}

export default Logo;