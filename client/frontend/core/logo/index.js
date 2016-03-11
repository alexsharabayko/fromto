import React, {PropTypes} from 'react';
import BaseComponent from 'core/base-component';

import './style.less';

class Logo extends BaseComponent {
    render() {
        return (
            <div className="logo">
                <div className="logo_img image-wrapper">
                    <img src="frontend/img/logo/driver.png" alt="driver"/>
                </div>
                <div className="logo_text">
                    <span className="logo_text_item">From&nbsp;</span>
                    <span className="logo_text_item">- To</span>
                </div>
            </div>
        );
    }
}

export default Logo;