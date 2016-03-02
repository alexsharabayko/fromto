import React from 'react';

class BaseComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        document.querySelector('head title').innerHTML = this.state.title || 'From - To';
    }
}

export default BaseComponent;