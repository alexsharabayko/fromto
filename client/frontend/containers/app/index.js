import React from 'react';
import BaseComponent from '../base-container';

import Language from 'constants/languages';
var l = new Language('ru');
debugger;

import './style.less';

class App extends BaseComponent {
    render() {
        return (
            <p>Hello world!</p>
        );
    }
}

export default App;