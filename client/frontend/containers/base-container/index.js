import React from 'react';

class Base extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        document.querySelector('head title').innerHTML = this.props.title || 'From - To';
    }
}

export default Base;