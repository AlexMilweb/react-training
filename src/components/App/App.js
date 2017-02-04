import React, { Component } from 'react';
import Example from '../Example/Example';
import './App.less';

export default class App extends Component {
    state = {}

    render() {
        return (
            <div className="app">
                <Example exampleName="Counter">
                    This Example!
                </Example>
            </div>
        );
    }
}
