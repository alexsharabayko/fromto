import React from 'react';

class App extends React.Component {
    render() {
        return (
            <FuelSavingsApp appState={this.props.appState} actions={this.props.actions}/>
        );
    }
}